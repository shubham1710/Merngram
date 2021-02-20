import { motion } from 'framer-motion';
import {Component} from 'react';
import { getUserPosts } from '../../actions/postActions';
import { connect } from 'react-redux';
import {withRouter} from 'react-router';
import PropTypes from 'prop-types';
import {Card, CardBody, Button} from 'reactstrap';
import {Link} from 'react-router-dom';

class Photos extends Component {

    state = {
        postLoaded: false
    }

    static propTypes = {
        getUserPosts: PropTypes.func.isRequired,
        isAuthenticated: PropTypes.bool,
        user: PropTypes.object.isRequired,
        post: PropTypes.object.isRequired,
        match: PropTypes.object.isRequired
    }

    ongetUserPosts = async (userId) => {
        await this.props.getUserPosts(userId);
        this.setState({postLoaded: true});
    }

    render(){
        const user = this.props.user;
        const userPosts = this.props.post.userPosts;

        if(user && !this.props.post.loading && !this.state.postLoaded){
            this.ongetUserPosts(this.props.match.params.id);
        }

        return ( 
            <div className="container">
                <div className="row">
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
                    {userPosts && userPosts.map((post)=>(
                        <div className="col-md-3 mb-3">
                            <Link to={`/post/${post._id}`}><motion.img src={post.image} alt="" loading="lazy" className="img-fluid rounded shadow-sm"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            /></Link>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user,
    post: state.post
})
 
export default connect(mapStateToProps, {getUserPosts})(withRouter(Photos));