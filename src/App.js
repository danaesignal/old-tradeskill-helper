import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout'
import classes from './App.scss'

class App extends Component {
  render(){
    return (
      <div className={classes.app}>
        <Layout />
      </div>
    );
  }
};

export default App;