import { Component } from 'react';
import {Button, Card, CardBody} from 'reactstrap';
import {Link} from 'react-router-dom';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getProfile, getCurrentProfile } from '../../actions/profileActions';
import { getUserPosts } from '../../actions/postActions';
import { follow } from '../../actions/performActions';
import { withRouter } from 'react-router';

class Profile extends Component {

    state = {
        profileLoaded: false,
        currLoaded: false,
        postLoaded: false,
        following: [], 
        followLoaded: false,
        followed: false
    }

    static propTypes = {
        getProfile: PropTypes.func.isRequired,
        getUserPosts: PropTypes.func.isRequired,
        isAuthenticated: PropTypes.bool,
        user: PropTypes.object.isRequired,
        profile: PropTypes.object.isRequired,
        post: PropTypes.object.isRequired,
        match: PropTypes.object.isRequired,
        follow: PropTypes.func.isRequired
    }

    ongetProfile = async (id) => {
        await this.props.getProfile(id);
        this.setState({profileLoaded: true});
    }

    ongetCurrProfile = async (id) => {
        await this.props.getCurrentProfile(id);
        this.setState({currLoaded: true});
    }

    ongetUserPosts = async (userId) => {
        await this.props.getUserPosts(userId);
        this.setState({postLoaded: true});
    }

    getFollowing = (currProfile, profile) => {
        for(var i=0;i<currProfile.following.length;i++){
            this.state.following.push(currProfile.following[i].followingId);
        }
        if(this.state.following.includes(profile.userId)){
            this.setState({followed: true});
        }
        this.setState({followLoaded: true});
    }

    onfollow = async (followerId, followingId) => {
        await this.props.follow(followerId,followingId);
        if(this.state.followed===false){
            this.setState({followed: true});
        }
        else{
            this.setState({followed: false});
        }
        this.setState({followLoaded: false});
    }

    componentDidUpdate(prevProps){
        if(prevProps.match.params.id !== this.props.match.params.id)
        {
            this.ongetProfile(this.props.match.params.id);
            this.ongetUserPosts(this.props.match.params.id);
        }
    }

    render(){
        const user = this.props.user;
        const profile = this.props.profile.profile;
        const currProfile = this.props.profile.currProfile;
        const userPosts = this.props.post.userPosts;

        if(this.props.isAuthenticated && !this.props.profile.loading && !this.state.profileLoaded){
            this.ongetProfile(this.props.match.params.id);
        }

        if(this.props.isAuthenticated && !this.props.profile.loading && this.state.profileLoaded && !this.props.post.loading && !this.state.postLoaded){
            this.ongetUserPosts(this.props.match.params.id);
        }

        if(user && !this.props.profile.currLoading && !this.state.currLoaded)
        {
            this.ongetCurrProfile(user._id);
        }

        if(profile && currProfile && !this.state.followLoaded){
            this.getFollowing(currProfile, profile);
        }

        return(
            <div className="row py-5 px-4">
                <div className="col-md-9 mx-auto">
                    {!user &&
                        <Card className="card-signin">
                            <CardBody>
                                <h5 className="card-title text-center"><b>Login to view this page</b></h5>
                                <div className="form-signin">
                                    <Link to="/login"><Button color="success" className="text-uppercase btn-block">Login</Button></Link>
                                </div>
                            </CardBody>
                        </Card>
                    }
                    {user && profile && <div className="bg-white shadow rounded overflow-hidden">
                        <div className="px-4 pt-0 pb-4 cover">
                            <div className="media align-items-end profile-head">
                                <div className="profile mr-3">
                                    <img src={profile.pic} loading="lazy" alt="..." width="130" className="rounded mb-2 img-thumbnail"/>
                                    {user._id === profile.userId &&
                                    <Link to='/edit-profile'><a className="btn btn-outline-dark btn-sm btn-block">Edit profile</a></Link>}
                                    {user._id !== profile.userId && !this.state.followed &&
                                    <Button color="outline-success" className="btn-sm btn-block" onClick={() => {this.onfollow(user._id, profile.userId)}}>Follow</Button>}
                                    {user._id !== profile.userId && this.state.followed &&
                                    <Button color="outline-danger" className="btn-sm btn-block" onClick={() => {this.onfollow(user._id, profile.userId)}}>Unfollow</Button>}
                                </div>
                                <div className="media-body mb-5 text-white">
                                    <h4 className="mt-0">{profile.name}</h4>
                                    {user._id === profile.userId && <h6 className="mt-0 mb-4"><i>@{user.username}</i></h6>}
                                </div>
                            </div>
                        </div>
                        <div className="bg-light p-4 d-flex justify-content-end text-center">
                            <ul className="list-inline mb-0">
                                <li className="list-inline-item">
                                    {profile.followers ? <h5 className="font-weight-bold mb-0 d-block">{profile.followers.length}</h5>:<h5 className="font-weight-bold mb-0 d-block">0</h5>}
                                    <Link to={`/followers/${profile.userId}`}>
                                        <small className="text-muted"> <i className="fas fa-user mr-1"></i>Followers</small>
                                    </Link>
                                </li>
                                <li className="list-inline-item">
                                    {profile.following ? <h5 className="font-weight-bold mb-0 d-block">{profile.following.length}</h5> : <h5 className="font-weight-bold mb-0 d-block">0</h5>}
                                    <Link to={`/following/${profile.userId}`}>
                                        <small className="text-muted"> <i className="fas fa-user mr-1"></i>Following</small>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="px-4 py-3">
                            <h5 className="mb-1">About</h5>
                            <div className="p-4 rounded shadow-sm bg-light">
                                <p className="font-italic mb-0">{profile.bio}</p>
                            </div>
                        </div>
                        <div className="py-4 px-4">
                            <div className="d-flex align-items-center justify-content-between mb-3">
                                <h5 className="mb-0">Recent photos</h5>
                                <Link to={`/photos/${profile.userId}`}>
                                    <a className="btn btn-link text-muted">Show all</a>
                                </Link>
                            </div>
                            <div className="row">
                            {userPosts && userPosts.slice(0,4).map((post)=>(
                                <div className="col-md-3 mb-3">
                                    <motion.img loading="lazy" src={post.image} alt="" className="img-fluid rounded shadow-sm"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.5 }}
                                    />
                                </div>
                            ))}
                            </div>
                        </div>
                    </div>}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    profile: state.profile,
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user,
    post: state.post
})


export default connect(mapStateToProps, {getProfile, getCurrentProfile, getUserPosts, follow})(withRouter(Profile));
