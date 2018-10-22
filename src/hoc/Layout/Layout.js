import React, { Component } from 'react';
import Header from '../../component/Header/Header';
import ControlPanel from '../../component/ControlPanel/ControlPanel';
import DisplayPanel from '../../component/DisplayPanel/DisplayPanel';

class Layout extends Component{
  state = {
    placeholder: true,
  };
  render(){
    return (
      <div>
        <Header/>
        <ControlPanel/>
        <DisplayPanel/>
      </div>
    );
  }
}

export default Layout;