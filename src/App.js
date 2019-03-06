import React, { Component } from 'react';

import Header from './components/Header';
import Section from './components/Section';

import CounterAlpha from './containers/CounterAlpha';
import CounterBeta from './containers/CounterBeta';
import TodoAlpha from './containers/TodoAlpha';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Section title='Section'>
          <CounterAlpha />
          <CounterBeta />
        </Section>
        <TodoAlpha />
      </div>
    );
  }
}

export default App;
