import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import classes from './index.scss';
import Layout from './hoc/Layout/Layout'

class App extends Component {
  render(){
    return (
      <div className={classes.Div}>
        <Layout />
      </div>
    );
  }
};

export default App;