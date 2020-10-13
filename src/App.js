import React from 'react';
import logo from './logo.svg';
import './App.css';
import Row from './Row';
import requests from './requests';

function App() {
  return (
    <div className="App">
      <h1>Hey Clever Programer! Let's build netflix-clone today.</h1>
      <Row title="NETFLIX ORINGINALS" fetUrl={requests.fetchTrending}/>
      <Row title="Trending now" fetUrl={requests.fetchTrending} />
    </div>
  );
}

export default App;
