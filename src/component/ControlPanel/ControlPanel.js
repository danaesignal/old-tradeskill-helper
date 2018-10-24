// A collection of <ItemDisplays /> where you can change the associated price of a
// crafting component, which triggers calculations that alter the state accordingly
// Eventually you can swap servers and pull market data to populate the controls.

import React, { PureComponent } from 'react';
import classes from './ControlPanel.scss';

class ControlPanel extends PureComponent{
  render(){
    return (
      <div>
        <ul className={classes.ControlPanel}>
          <li><div>Test</div><input type="text" style={{'width': '50px'}}></input></li>
          <li>Mock</li>
          <li>Mock</li>
          <li>Mock</li>
          <li>Mock</li>
          <li>Mock</li>
          <li>Mock</li>
          <li>Mock</li>
        </ul>
      </div>
    );
  }
}

export default ControlPanel;