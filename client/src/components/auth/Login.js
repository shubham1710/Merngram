import { Component } from 'react';
import { Row, Card, Button, Form, FormGroup, Label, Input, Alert, CardBody } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/authActions';
import { clearErrors } from '../../actions/errorActions';
import { withRouter } from 'react-router';

class Login extends Component {

    state = {
        email: '',
        password: '',
        msg: null
    };

    static propTypes = {
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired,
        login: PropTypes.func.isRequired,
        clearErrors: PropTypes.func.isRequired,
        history: PropTypes.object.isRequired
    }

    componentDidUpdate(prevProps) {
        const { error, isAuthenticated } = this.props;
        if(error !== prevProps.error){
            // Check for register error
            if(error.id === 'LOGIN_FAIL'){
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
        const {email, password} = this.state;
        const user = {email, password};
        this.props.login(user);
    }

    render(){
        return(
            <div className="container">
                <Row>
                    <div className="col-md-7 mx-auto">
                        <Card className="card card-signin my-5">
                            <CardBody className="card-body">
                                <h5 className="card-title text-center"><b>Sign In</b></h5>
                                {this.state.msg ? (<Alert color="danger">{this.state.msg}</Alert>):null}
                                <Form className="form-signin" onSubmit={this.onSubmit}>
                                    <FormGroup className="form-label-group">
                                        <Input type="email" id="email" name="email" className="form-control" placeholder="Email address" onChange={this.onChange} required autofocus/>
                                        <Label for="email">Email address</Label>
                                    </FormGroup>
                                    <FormGroup className="form-label-group">
                                        <Input type="password" id="password" name="password" className="form-control" placeholder="Password" onChange={this.onChange} required/>
                                        <Label for="password">Password</Label>
                                    </FormGroup>
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

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error
});

const LoginWithRouter = withRouter(Login);

export default connect(mapStateToProps,{login, clearErrors})(LoginWithRouter);