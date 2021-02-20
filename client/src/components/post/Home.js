import { Component } from 'react';
import { Link } from 'react-router-dom';
import {Card, Button, CardBody, CardImg, CardText, CardHeader} from 'reactstrap';
import { getAllPosts } from '../../actions/postActions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Home extends Component {

    state = {
        postLoaded: false,
    }

    static propTypes = {
        isAuthenticated: PropTypes.bool,
        user: PropTypes.object.isRequired,
        post: PropTypes.object.isRequired,
        getAllPosts: PropTypes.func.isRequired
    }

    ongetPosts = async () => {
        await this.props.getAllPosts();
        this.setState({postLoaded: true});
    }

    render(){
        const user = this.props.user;
        const posts = this.props.post.allPosts;

        if(!this.props.post.loading && !this.state.postLoaded){
            this.ongetPosts();
        }

        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-8 mx-auto">
                        {posts && posts.map((post)=>(<Card className="mb-4 card-signin">
                            <CardHeader>
                                <img src={post.pic} 
                                    class="rounded-circle"
                                    loading="lazy"
                                    alt="User"
                                    width="30px"
                                />
                                { user && post.userId === user._id ?
                                <Link to={`/profile/${post.userId}`}><span className="ml-2"><b>{post.name}</b></span><br/></Link>:
                                <a href={`/profile/${post.userId}`}><span className="ml-2"><b>{post.name}</b></span><br/></a> 
                                }
                            </CardHeader>
                            <CardBody>
                                <a href={`/post/${post._id}`}>
                                    <CardImg src={post.image} loading="lazy"></CardImg>
                                </a>
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

export default connect(mapStateToProps,{ getAllPosts})(Home);