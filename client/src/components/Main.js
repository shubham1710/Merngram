import { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Login from './auth/Login';
import Register from './auth/Register';
import Home from './Home';
import Profile from './Profile';

class Main extends Component {
    render(){
        return(
            <div>
                <Switch>
                    <Route path='/home'>
                        <Home/>
                    </Route>
                    <Route path='/login'>
                        <Login/>
                    </Route>
                    <Route path='/register'>
                        <Register/>
                    </Route>
                    <Route path='/profile'>
                        <Profile/>
                    </Route>
                    <Redirect to='/home'/>
                </Switch>
            </div>
        )
    }
}

export default withRouter((Main));