import { Component } from 'react';
import { Provider } from 'react-redux';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import AppNavbar from './components/comps/AppNavbar.js';
import Main from './components/Main';

class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <AppNavbar/>
          <Main/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
