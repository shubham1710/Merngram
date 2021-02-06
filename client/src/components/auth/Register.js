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

class Register extends Component {
    state = {
        username: '',
        email: '',
        password: '',
        msg: null
    };

    onChange = (e) => {
        this.setState({[e.target.name]:e.target.value});
    }

    onSubmit = (e) => {
        e.preventDefault(); 
        
        const {username, email, password} = this.state;
        const user = {username, email, password};

        console.log(user);
    }

    render(){
        return(
            <div className="container">
                <Row>
                    <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                        <Card className="card card-signin my-5">
                            <CardBody className="card-body">
                                <h5 className="card-title text-center">Register</h5>
                                {this.state.msg ? (<Alert color="danger">{this.state.msg}</Alert>):null}
                                <Form className="form-signin" onSubmit={this.onSubmit}>
                                    <FormGroup className="form-label-group">
                                        <Input type="text" id="username" name="username" className="form-control" placeholder="Username" onChange={this.onChange} required autofocus/>
                                        <Label for="username">Username</Label>
                                    </FormGroup>
                                    <FormGroup className="form-label-group">
                                        <Input type="email" id="email" name="email" className="form-control" placeholder="Email address" onChange={this.onChange} required/>
                                        <Label for="email">Email address</Label>
                                    </FormGroup>
                                    <FormGroup className="form-label-group">
                                        <Input type="password" id="password" name="password" className="form-control" placeholder="Password" onChange={this.onChange} required/>
                                        <Label for="password">Password</Label>
                                    </FormGroup>
                                    <Button color="primary" className="btn btn-lg btn-block text-uppercase" type="submit">Register</Button>
                                </Form>
                            </CardBody>
                        </Card>
                    </div>
                </Row>
            </div>
        )
    }
}

export default Register;