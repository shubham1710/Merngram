import { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Login from './auth/Login';
import Register from './auth/Register';
import Home from './post/Home';
import Profile from './profile/Profile';
import Followers from './profile/Followers';
import Following from './profile/Following';
import Photos from './profile/Photos';
import EditProfile from './profile/EditProfile';
import Explore from './post/Explore';
import PostDetail from './post/PostDetail';
import NewPost from './post/NewPost';
import NotFound from './comps/NotFound';
import Logout from './auth/Logout';

class Main extends Component {
    render(){
        return(
            <div>
                <Switch>
                    <Route exact path='/'>
                        <Home/>
                    </Route>
                    <Route path='/explore'>
                        <Explore/>
                    </Route>
                    <Route path='/login'>
                        <Login/>
                    </Route>
                    <Route path='/logout'>
                        <Logout/>
                    </Route>
                    <Route path='/register'>
                        <Register/>
                    </Route>
                    <Route exact path='/profile/:id'>
                        <Profile/>
                    </Route>
                    <Route exact path='/followers/:id'>
                        <Followers/>
                    </Route>
                    <Route exact path='/following/:id'>
                        <Following/>
                    </Route>
                    <Route exact path='/photos/:id'>
                        <Photos/>
                    </Route>
                    <Route path='/edit-profile'>
                        <EditProfile/>
                    </Route>
                    <Route exact path='/post/:id'>
                        <PostDetail/>
                    </Route>
                    <Route path='/new'>
                        <NewPost/>
                    </Route>
                    <Route path='*'>
                        <NotFound/>
                    </Route>
                </Switch>
            </div>
        )
    }
}

export default withRouter((Main));