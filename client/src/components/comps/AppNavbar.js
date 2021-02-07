import { Component, Fragment } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, Container, NavLink, Button} from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class AppNavbar extends Component {
    state = {
        isOpen: false
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render(){
        const authLinks = (
            <Fragment>
                <NavItem>
                    <Link to="/explore"><NavLink>Explore</NavLink></Link>
                </NavItem>
                <NavItem>
                    <Link to="/new"><NavLink>New Post</NavLink></Link>
                </NavItem>
                <NavItem>
                    <Link to={`/profile/id`}><NavLink>Profile</NavLink></Link>
                </NavItem>
                <NavItem>
                    <NavLink href="/logout">Logout</NavLink>
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
                            {authLinks}{guestLinks}                               
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        );
    }
}

export default AppNavbar;