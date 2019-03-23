import React, { Component } from 'react';
import './App.css';
import List from './comp/List';
import Map from './comp/Map';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <List/>
        <Map/>
      </div>
    );
  }
}

export default App;
