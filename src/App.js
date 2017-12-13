import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

import './TableComponent.css';

import Table from "./components/TableComponent";

// header object
const head = [
    {
        label: 'Name',
        key: 'field0',
        sort: true,
    },
    {
        label: 'Email',
        key: 'field1',
        sort: true,
    },
    {
        label: 'Balance',
        key: 'field2',
        sort: function(rowA, rowB, sortingKey) {
            return rowA.balance > rowB.balance ? 1 : -1;
        },
    },
    {
        label: 'Test1',
        key: 'field3',
        sort: true,
    },
];

// body object
const obj = [{
    field0: "onion",
    field1: ".99",
    field2: 1,
    field3: 'A',
}, {
    field0: "pepper",
    field1: "1.25",
    field2: 2
}, {
    field0: "broccoli",
    field1: "3.00",
    field2: 3
}, {
    field0: "test1",
    field1: "3.00",
    field2: 3
}, {
    field0: "test2",
    field1: "3.00",
    field2: 3
}, {
    field0: "test3",
    field1: "3.00",
    field2: 3
}];

ReactDOM.render(
    <h1>Hello, world!</h1>,
    document.getElementById('root')
);
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Table head={head} data={obj} pageSize={5} />
      </div>
    );
  }
}

export default App;
