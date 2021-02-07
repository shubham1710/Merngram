import { useState } from 'react';
import {Row, Card, Button, Form, FormGroup, Label, Input, CardBody, CardText, CardImg} from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { set } from 'mongoose';
import { motion } from 'framer-motion';

const PostDetail = () => {
    const [cmnt, setCmnt] = useState('');

    const onSubmit = (e) => {
        e.preventDefault(); 
        console.log({cmnt});
        setCmnt('');
    }

    return ( 
        <div class="container">
            <div className="row">
                <div className="col-md-8 mx-auto mb-3">
                    <Card>
                        <CardBody>
                            <CardImg src="https://images.unsplash.com/photo-1469594292607-7bd90f8d3ba4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="" className="img-fluid rounded shadow-sm"></CardImg>
                            <CardText tag="h5" className="mt-2">Beautiful picture</CardText>
                            <Button color="success" className="mr-2">Like</Button>
                            <Button color="danger" className="mr-2">Unike</Button>
                            <Button color="info">Comment</Button>
                        </CardBody>
                    </Card>

                    <Form className="form-signin mt-3 mb-3" onSubmit={onSubmit}>
                        <FormGroup className="form-label-group">
                            <Input type="text" id="cmnt" name="cmnt" className="form-control" placeholder="Comment" onChange={(e) => setCmnt(e.target.value)} value={cmnt} required autofocus/>
                            <Label for="cmnt">Comment</Label>
                        </FormGroup>
                        <Button color="primary" className="btn btn-lg btn-block text-uppercase" type="submit">Comment</Button>
                    </Form>
                    
                    <div class="container d-flex justify-content-center mt-50 mb-50">
                        <div class="row">
                            <div class="col-md-12">
                                <Card>
                                    <CardBody>
                                        <CardText tag="h4">Comments</CardText>
                                    </CardBody>
                                    <motion.div class="comment-widgets m-b-20" layout>
                                        <motion.div class="d-flex flex-row comment-row" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
                                            <div class="p-2"><span class="round"><img src="https://firebasestorage.googleapis.com/v0/b/merngram-2f709.appspot.com/o/user.png?alt=media&token=469f5059-dc59-4a59-8f42-75cf19b0aec8" alt="user" width="50"/></span></div>
                                            <div class="comment-text w-100">
                                                <h5>Shubham</h5>
                                                <div class="comment-footer"> <span class="date">April 14, 2019</span></div>
                                                <p class="m-b-5 m-t-10">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it</p>
                                            </div>
                                        </motion.div>
                                        <motion.div class="d-flex flex-row comment-row" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
                                            <div class="p-2"><span class="round"><img src="https://firebasestorage.googleapis.com/v0/b/merngram-2f709.appspot.com/o/user.png?alt=media&token=469f5059-dc59-4a59-8f42-75cf19b0aec8" alt="user" width="50"/></span></div>
                                            <div class="comment-text active w-100">
                                                <h5>Satyam</h5>
                                                <div class="comment-footer"> <span class="date">March 13, 2020</span> </div>
                                                <p class="m-b-5 m-t-10">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites</p>
                                            </div>
                                        </motion.div>                                        
                                    </motion.div>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default PostDetail;