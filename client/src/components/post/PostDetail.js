import { Component } from 'react';
import {Card, Button, Form, FormGroup, Label, Input, CardBody, CardText, CardImg, CardHeader} from 'reactstrap';
import { connect } from 'react-redux';
import {getSinglePost} from '../../actions/postActions';
import {comment, deleteComment, like} from '../../actions/performActions';
import { motion } from 'framer-motion';
import {Link} from 'react-router-dom';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';

class PostDetail extends Component {

    state = {
        cmnt: '',
        postLoaded: false,
        likeUsers: [],
        likeLoaded: false,
        liked: false
    }

    static propTypes = {
        getSinglePost: PropTypes.func.isRequired,
        user: PropTypes.object.isRequired,
        post: PropTypes.object.isRequired,
        match: PropTypes.object.isRequired,
        like: PropTypes.func.isRequired,
        comment: PropTypes.func.isRequired,
        deleteComment: PropTypes.func.isRequired
    }

    ongetSinglePost = async () => {
        await this.props.getSinglePost(this.props.match.params.id);
        this.setState({postLoaded: true});
    }

    onSubmit = async (e) => {
        e.preventDefault(); 
        await this.props.comment(this.props.user._id, this.props.post.singlePost._id, this.state.cmnt);
        await this.props.getSinglePost(this.props.match.params.id);
        this.setState({cmnt: ''});
    }

    onDelete = async (postId, commentId) => {
        await this.props.deleteComment(postId, commentId);
        await this.props.getSinglePost(this.props.match.params.id);
    }

    getLikeUsers = (post) => {
        for(var i=0;i<post.likes.length;i++){
            this.state.likeUsers.push(post.likes[i].likeUser);
        }
        if(this.state.likeUsers.includes(this.props.user._id)){
            this.setState({liked: true});
        }
        this.setState({likeLoaded: true});
    }

    onLike = async (userId, postId) => {
        await this.props.like(userId, postId);
        if(this.state.liked===false){
            this.setState({liked: true});
        }
        else{
            this.setState({liked: false});
        }
    }

    render(){
        const user = this.props.user;
        const post = this.props.post;

        if(user && !post.loading && !this.state.postLoaded){
            this.ongetSinglePost();
        }

        if(user && post && post.singlePost && !this.state.likeLoaded){
            this.getLikeUsers(post.singlePost);
        }

        return ( 
            <div className="container">
                <div className="row">
                    {!user && <div className="col-md-8 mx-auto mb-3">
                        <Card className="card-signin my-5">
                            <CardBody>
                                <h5 className="card-title text-center"><b>Login to view this page!</b></h5>
                                <div className="form-signin">
                                    <Link to="/login"><Button color="success" className="text-uppercase btn-block mb-2">Login</Button></Link>
                                    <Link to="/explore"><Button color="info" className="text-uppercase btn-block">See All Photos</Button></Link>
                                </div>
                            </CardBody>
                        </Card>
                    </div>
                    }
                    {user && post && post.singlePost && post.singlePost.likes && <div className="col-md-8 mx-auto mb-3">
                        <Card className="card-signin">
                            <CardHeader>
                                <Link to ={`/profile/${post.singlePost.userId}`}><img src={post.singlePost.pic} 
                                    class="rounded-circle"
                                    alt="User"
                                    width="30px"
                                /></Link>
                                <Link to ={`/profile/${post.singlePost.userId}`}><span className="ml-2"><b>{post.singlePost.name}</b></span><br/></Link>
                            </CardHeader>
                            <CardBody>
                                <CardImg src={post.singlePost.image} alt="" loading="lazy" className="img-fluid rounded shadow-sm"></CardImg>
                                <CardText tag="h5" className="mt-2">{post.singlePost.desc}</CardText>
                                {!this.state.liked && <button className="mr-2 btn btn-outline-info" onClick={() => {this.onLike(user._id, post.singlePost._id)}}>Like | {post.singlePost.likes.length}</button>}
                                {this.state.liked && <button className="mr-2 btn btn-info" onClick={() => {this.onLike(user._id, post.singlePost._id)}} >Like | {post.singlePost.likes.length}</button>}
                            </CardBody>
                        </Card>

                        <Form className="form-signin mt-3 mb-3" onSubmit={this.onSubmit}>
                            <FormGroup className="form-label-group">
                                <Input type="text" id="cmnt" name="cmnt" className="form-control" placeholder="Comment" onChange={(e) => this.setState({cmnt: e.target.value})} value={this.state.cmnt} required autofocus/>
                                <Label for="cmnt">Comment</Label>
                            </FormGroup>
                            <Button color="primary" className="btn btn-lg btn-block text-uppercase" type="submit">Comment</Button>
                        </Form>
                        
                        <div className="container justify-content-center mt-50 mb-50">
                            <div className="row">
                                <div className="col-md-12 mx-auto">
                                    <Card >
                                        <CardHeader>
                                            <CardText tag="h4">Comments ({post.singlePost.comments.length})</CardText>
                                        </CardHeader>
                                        <motion.div className="comment-widgets m-b-20" layout>
                                            {post.singlePost.comments.map((comment) => (<motion.div className="d-flex flex-row comment-row" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
                                                <div className="p-2"><span className="round"><img src={comment.cmntPic} loading="lazy" alt="user" width="30"/></span></div>
                                                <div className="comment-text active w-100">
                                                    <h5>{comment.cmntName}</h5>
                                                    <p className="m-b-5 m-t-10">{comment.cmnt}</p>
                                                </div>
                                                {user._id === comment.cmntUser && <span className="close" style={{color: 'red'}} onClick={() => {this.onDelete(post.singlePost._id, comment._id)}}>x</span>}
                                            </motion.div>))}                                        
                                        </motion.div>
                                    </Card>
                                </div>
                            </div>
                        </div>
                    </div>}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    user: state.auth.user,
    post: state.post
})
 
export default connect(mapStateToProps, {comment, deleteComment, getSinglePost, like})(withRouter(PostDetail));