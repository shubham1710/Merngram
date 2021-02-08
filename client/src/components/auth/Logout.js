import { Component } from 'react';
import { logout } from '../../actions/authActions';
import { connect } from 'react-redux';
import { Row, Card, Button, CardBody } from 'reactstrap';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

class Logout extends Component {
    static propTypes = {
        logout: PropTypes.func.isRequired,
    }
    
    render() {
        return (
            <div className="container">
                <Row>
                    <div className="col-md-7 mx-auto">
                        <Card className="card card-signin my-5">
                            <CardBody className="card-body">
                                <h5 className="card-title text-center"><b>Are you sure you want to logout?</b></h5>
                                <div className="form-signin">
                                    <Link to="/"><Button color="danger" className="btn-block text-uppercase" onClick={this.props.logout}>Logout</Button></Link>
                                    <Link to="/"><Button color="primary" className="btn-block text-uppercase mt-2">Go Back Home</Button></Link>
                                </div>
                            </CardBody>
                        </Card>
                    </div>
                </Row>
            </div>
        )
    }
}

export default connect(null,{logout})(Logout);
