import { Component } from 'react';
import {
    Row,
    Card,
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    Alert,
    CardBody
} from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Login extends Component {
    state = {
        email: '',
        password: '',
        msg: null
    };

    render(){
        return(
            <div className="container">
                <Row>
                    <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                        <Card className="card card-signin my-5">
                            <CardBody className="card-body">
                                <h5 className="card-title text-center">Sign In</h5>
                                <Form className="form-signin">
                                <div className="form-label-group">
                                    <Input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autofocus/>
                                    <Label for="inputEmail">Email address</Label>
                                </div>

                                <div className="form-label-group">
                                    <Input type="password" id="inputPassword" className="form-control" placeholder="Password" required/>
                                    <Label for="inputPassword">Password</Label>
                                </div>
                                <Button color="primary" className="btn btn-lg btn-block text-uppercase" type="submit">Sign in</Button>
                                </Form>
                            </CardBody>
                        </Card>
                    </div>
                </Row>
            </div>
        )
    }
}

export default Login;