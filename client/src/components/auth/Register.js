import { Component } from 'react';
import { Row, Card, Button, Form, FormGroup, Label, Input, Alert, CardBody } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { register } from '../../actions/authActions';
import { clearErrors } from '../../actions/errorActions';
import { withRouter } from 'react-router';

class Register extends Component {
    state = {
        username: '',
        email: '',
        password: '',
        msg: null
    };

    static propTypes = {
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired,
        register: PropTypes.func.isRequired,
        clearErrors: PropTypes.func.isRequired,
        history: PropTypes.object.isRequired
    }

    componentDidUpdate(prevProps) {
        const { error, isAuthenticated } = this.props;
        if(error !== prevProps.error){
            // Check for register error
            if(error.id === 'REGISTER_FAIL'){
                this.setState({msg: error.msg.msg});
            }
            else{
                this.setState({msg:null});
            }
        }

        // If authenticated, redirect to homepage
        if(isAuthenticated){
            this.props.history.push('/');
        }
    }

    onChange = (e) => {
        this.setState({[e.target.name]:e.target.value});
    }

    onSubmit = (e) => {
        e.preventDefault(); 
        
        const {username, email, password} = this.state;
        const user = {username, email, password};

        this.props.register(user);
    }

    render(){
        return(
            <div className="container">
                <Row>
                    <div className="col-md-7 mx-auto">
                        <Card className="card card-signin my-5">
                            <CardBody className="card-body">
                                <h5 className="card-title text-center"><b>Register</b></h5>
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

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error
});

const RegisterWithRouter = withRouter(Register);

export default connect(mapStateToProps,{register, clearErrors})(RegisterWithRouter);