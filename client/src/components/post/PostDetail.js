import { useState, useEffect } from 'react';
import {Card, Button, Form, FormGroup, Label, Input, CardBody, CardText, CardImg, CardHeader} from 'reactstrap';
import { connect } from 'react-redux';
import {getSinglePost} from '../../actions/postActions';
import {comment, deleteComment, like} from '../../actions/performActions';
import { motion } from 'framer-motion';
import {Link, useParams} from 'react-router-dom';

const PostDetail = ({getSinglePost, user, post, comment, deleteComment, like}) => {
    const { id } = useParams();
    const [cmnt, setCmnt] = useState('');
    const [isPending, setPending] = useState(true);

    useEffect(() => {
        getSinglePost(id);
        setPending(false);
    },[isPending])

    const onSubmit = async (e) => {
        e.preventDefault(); 
        await comment(user._id, post.singlePost._id, cmnt);
        await getSinglePost(id);
        setCmnt('');
    }

    const onDelete = async (postId, commentId) => {
        await deleteComment(postId, commentId);
        await getSinglePost(id);
    }

    const onLike = async (userId, postId) => {
        await like(userId, postId);
        await getSinglePost(id);
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
                {user && post && post.singlePost && <div className="col-md-8 mx-auto mb-3">
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
                            <CardImg src={post.singlePost.image} alt="" className="img-fluid rounded shadow-sm"></CardImg>
                            <CardText tag="h5" className="mt-2">{post.singlePost.desc}</CardText>
                            <button className="mr-2 btn btn-info">Like | {post.singlePost.likes.length}</button>
                            <button className="mr-2 btn btn-outline-info">Like | {post.singlePost.likes.length}</button>
                        </CardBody>
                    </Card>

                    <Form className="form-signin mt-3 mb-3" onSubmit={onSubmit}>
                        <FormGroup className="form-label-group">
                            <Input type="text" id="cmnt" name="cmnt" className="form-control" placeholder="Comment" onChange={(e) => setCmnt(e.target.value)} value={cmnt} required autofocus/>
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
                                            <div className="p-2"><span className="round"><img src={comment.cmntPic} alt="user" width="30"/></span></div>
                                            <div className="comment-text active w-100">
                                                <h5>{comment.cmntName}</h5>
                                                <p className="m-b-5 m-t-10">{comment.cmnt}</p>
                                            </div>
                                            <span className="close" style={{color: 'red'}} onClick={() => {onDelete(post.singlePost._id, comment._id)}}>x</span>
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

const mapStateToProps = (state) => ({
    user: state.auth.user,
    post: state.post
})
 
export default connect(mapStateToProps, {comment, deleteComment, getSinglePost})(PostDetail);