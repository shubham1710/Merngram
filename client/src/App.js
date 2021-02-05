import { Component } from 'react';
import { Provider } from 'react-redux';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {
  render(){
    return (
      <div className="App">
        <h1>Merngram</h1>
      </div>
    );
  }
}

export default App;
