import { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Login from './auth/Login';
import Register from './auth/Register';
import Home from './Home';
import Profile from './Profile';
import FollowList from './FollowList';
import Photos from './Photos';
import EditProfile from './EditProfile';
import Feed from './Feed';
import PostDetail from './PostDetail';
import NewPost from './NewPost';
import NotFound from './NotFound';

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
                        <FollowList/>
                    </Route>
                    <Route path='/following/:id'>
                        <FollowList/>
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