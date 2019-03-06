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
        <Section title='Counter'>
          <CounterAlpha />
          <CounterBeta />
        </Section>
        <Section title="Todos">
          <TodoAlpha />
        </Section>
      </div>
    );
  }
}

export default App;
