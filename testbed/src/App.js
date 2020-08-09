/*eslint no-unused-expressions: "error"*/

import React from 'react';
import BoilerplateComponent from 'react-npm-package';
import u from 'react-npm-package/utils';
import logo from './logo.svg';
import './App.css';

function App() {
  u();
  return (
    <BoilerplateComponent label="Test" onChange={() => {}} />
  );
}

export default App;
