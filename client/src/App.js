import { Component } from 'react';
import { Provider } from 'react-redux';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import AppNavbar from './components/AppNavbar.js';
import Login from './components/auth/Login';

class App extends Component {
  render(){
    return (
      <div className="App">
        <AppNavbar/>
        <Login/>
      </div>
    );
  }
}

export default App;
