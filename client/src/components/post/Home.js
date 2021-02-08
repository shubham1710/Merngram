import { Component } from 'react';
import { Link } from 'react-router-dom';
import {Card, Button, CardBody, CardImg, CardText, CardHeader} from 'reactstrap';

class Home extends Component {
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-8 mx-auto">
                        <Card className="mb-4 card-signin">
                            <CardHeader>
                                <img src="https://firebasestorage.googleapis.com/v0/b/merngram-2f709.appspot.com/o/user.png?alt=media&token=469f5059-dc59-4a59-8f42-75cf19b0aec8" 
                                    class="rounded-circle"
                                    alt="User"
                                    width="30px"
                                />
                                <span className="ml-2"><b>Shubham</b></span><br/>
                                <small>Posted on 5th February</small>
                            </CardHeader>
                            <CardBody>
                                <Link to={`/post/id`}>
                                    <CardImg src="https://images.unsplash.com/photo-1469594292607-7bd90f8d3ba4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="" className="img-fluid rounded shadow-sm"></CardImg>
                                </Link>
                                <CardText tag="h6" className="mt-3">Beautiful picture</CardText>
                                <hr my-1/>
                                <Button color="success" className="mr-2">Like</Button>
                                <Button color="danger" className="mr-2">Unlike</Button>
                                <Link to={`/post/id`}><Button color="info">Comment</Button></Link>
                            </CardBody>
                        </Card>
                        <Card className="mb-4 card-signin">
                            <CardHeader>
                                <img src="https://firebasestorage.googleapis.com/v0/b/merngram-2f709.appspot.com/o/user.png?alt=media&token=469f5059-dc59-4a59-8f42-75cf19b0aec8" 
                                    class="rounded-circle"
                                    alt="User"
                                    width="30px"
                                />
                                <span className="ml-2"><b>Satyam</b></span><br/>
                                <small>Posted on 5th February</small>
                            </CardHeader>
                            <CardBody>
                                <Link to={`/post/id`}>
                                    <CardImg src="https://images.unsplash.com/photo-1469594292607-7bd90f8d3ba4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="" className="img-fluid rounded shadow-sm"></CardImg>
                                </Link>
                                <CardText tag="h6" className="mt-3">Beautiful picture</CardText>
                                <hr my-1/>
                                <Button color="success" className="mr-2">Like</Button>
                                <Button color="danger" className="mr-2">Unlike</Button>
                                <Link to={`/post/id`}><Button color="info">Comment</Button></Link>
                            </CardBody>
                        </Card>
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;