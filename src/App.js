import React, { Component } from 'react';
import Header from './components/Header';
import CounterAlpha from './containers/CounterAlpha';
import TodoAlpha from './containers/TodoAlpha';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <CounterAlpha />
        <TodoAlpha />
      </div>
    );
  }
}

export default App;
