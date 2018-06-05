import React, { Component } from 'react';
import './App.css';

import Aux from './Hoc/Aux';
import Table from './Table/Table';

class App extends Component {
  render() {
    return (
        <Aux>
          <div className="App">
            <Table />
          </div>
        </Aux>
    );
  }
}

export default App;
