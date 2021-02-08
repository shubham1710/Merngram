import { Component } from 'react';
import { Provider } from 'react-redux';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import AppNavbar from './components/comps/AppNavbar.js';
import Main from './components/Main';
import store from './store';
import {loadUser} from './actions/authActions';

class App extends Component {
  componentDidMount(){
    store.dispatch(loadUser());
  }
  render(){
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <AppNavbar/>
            <Main/>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
