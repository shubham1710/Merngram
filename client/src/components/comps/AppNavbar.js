import { Component, Fragment } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, Container, NavLink, Button} from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class AppNavbar extends Component {
    state = {
        isOpen: false
    }

    static propTypes = {
        auth: PropTypes.object.isRequired
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render(){
        const { isAuthenticated, user } = this.props.auth;
        const authLinks = (
            <Fragment>
                <NavItem>
                    <Link to="/explore"><NavLink>Explore</NavLink></Link>
                </NavItem>
                <NavItem>
                    <Link to="/new"><NavLink>New Post</NavLink></Link>
                </NavItem>
                <NavItem>
                    {user && user._id &&<Link to={`/profile/${user._id}`}><NavLink>Profile</NavLink></Link>}
                </NavItem>
                <NavItem>
                    <Link to="/logout"><NavLink>Logout</NavLink></Link>
                </NavItem>
            </Fragment>
        );

        const guestLinks = (
            <Fragment>
                <NavItem>
                    <Link to="/register"><NavLink>Register</NavLink></Link>
                </NavItem>
                <NavItem>
                    <Link to="/login"><NavLink>Login</NavLink></Link> 
                </NavItem>
            </Fragment>
        );

        return(
            <Navbar color="light" light expand="sm" className="mb-5" sticky="top">
                <Container>
                    <Link to='/'><NavbarBrand><b>Merngram</b></NavbarBrand></Link>
                    <NavbarToggler onClick={this.toggle}/>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar> 
                            { isAuthenticated ? authLinks: guestLinks}                               
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        );
    }
}

const mapStateToProps = state => ({
    auth: state.auth
})


export default connect(mapStateToProps, null)(AppNavbar);