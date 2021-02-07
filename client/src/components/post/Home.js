import { Component } from 'react';
import {Card, Button, CardBody, CardImg, CardText} from 'reactstrap';

class Home extends Component {
    render(){
        return(
            <div class="container">
                <div className="row">
                    <div className="col-md-9 mx-auto mb-3">
                        <Card>
                            <CardBody>
                                <CardImg src="https://images.unsplash.com/photo-1469594292607-7bd90f8d3ba4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="" className="img-fluid rounded shadow-sm"></CardImg>
                                <CardText tag="h5" className="mt-2">Beautiful picture</CardText>
                                <Button color="success" className="mr-2">Like</Button>
                                <Button color="danger" className="mr-2">Unike</Button>
                                <Button color="info">Comment</Button>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-md-9 mx-auto mb-3">
                        <Card>
                            <CardBody>
                                <CardImg src="https://images.unsplash.com/photo-1469594292607-7bd90f8d3ba4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="" className="img-fluid rounded shadow-sm"></CardImg>
                                <CardText tag="h5" className="mt-2">Beautiful picture</CardText>
                                <Button color="success" className="mr-2">Like</Button>
                                <Button color="danger" className="mr-2">Unike</Button>
                                <Button color="info">Comment</Button>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;