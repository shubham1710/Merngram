import { Component } from 'react';
import { Link } from 'react-router-dom';
import {Card, Button, CardBody, CardImg, CardText, CardHeader} from 'reactstrap';
import { getFollowingPosts } from '../../actions/postActions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Home extends Component {

    state = {
        postLoaded: false,
    }

    static propTypes = {
        getFollowingPosts: PropTypes.func.isRequired,
        isAuthenticated: PropTypes.bool,
        user: PropTypes.object.isRequired,
        post: PropTypes.object.isRequired,
    }

    ongetFollowingPosts = async (userId) => {
        await this.props.getFollowingPosts(userId);
        this.setState({postLoaded: true});
    }

    render(){
        const user = this.props.user;
        const posts = this.props.post.followingPosts;

        if(this.props.isAuthenticated && !this.props.post.loading && !this.state.postLoaded){
            this.ongetFollowingPosts(user._id);
        }

        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-8 mx-auto">
                        {!user &&
                            <Card className="card-signin my-5">
                                <CardBody>
                                    <h5 className="card-title text-center"><b>Login to view this page!</b></h5>
                                    <div className="form-signin">
                                        <Link to="/login"><Button color="success" className="text-uppercase btn-block mb-2">Login</Button></Link>
                                        <Link to="/explore"><Button color="info" className="text-uppercase btn-block">See All Photos</Button></Link>
                                    </div>
                                </CardBody>
                            </Card>
                        }
                        {user && posts && posts.map((post)=>(<Card className="mb-4 card-signin">
                            <CardHeader>
                                <Link to ={`/profile/${post.userId}`}><img src={post.pic} 
                                    class="rounded-circle"
                                    loading="lazy"
                                    alt="User"
                                    width="30px"
                                /></Link>
                                <Link to={`/profile/${post.userId}`}><span className="ml-2"><b>{post.name}</b></span><br/></Link>
                            </CardHeader>
                            <CardBody>
                                <Link to={`/post/${post._id}`}>
                                    <CardImg src={post.image} loading="lazy"></CardImg>
                                </Link>
                                <CardText tag="h6" className="mt-3">{post.desc}</CardText>
                            </CardBody>
                        </Card>))}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user,
    post: state.post
})

export default connect(mapStateToProps,{getFollowingPosts})(Home);