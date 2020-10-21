import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Menu from './Component/left/Menu';
import Main from './Component/main/Main';

function App() {
  return (
    <div className="App">
      <Main/>
    </div>
  );
}

export default App;
