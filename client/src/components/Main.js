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
import Feed from './post/Feed';
import PostDetail from './post/PostDetail';
import NewPost from './post/NewPost';
import NotFound from './comps/NotFound';

class Main extends Component {
    render(){
        return(
            <div>
                <Switch>
                    <Route path='/home'>
                        <Home/>
                    </Route>
                    <Route path='/feed'>
                        <Feed/>
                    </Route>
                    <Route path='/login'>
                        <Login/>
                    </Route>
                    <Route path='/register'>
                        <Register/>
                    </Route>
                    <Route path='/profile/:id'>
                        <Profile/>
                    </Route>
                    <Route path='/followers/:id'>
                        <Followers/>
                    </Route>
                    <Route path='/following/:id'>
                        <Following/>
                    </Route>
                    <Route path='/photos/:id'>
                        <Photos/>
                    </Route>
                    <Route path='/edit-profile'>
                        <EditProfile/>
                    </Route>
                    <Route path='/post/:id'>
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