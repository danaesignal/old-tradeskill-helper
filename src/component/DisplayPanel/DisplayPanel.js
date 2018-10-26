// Holds assorted <TradeskillWrappers /> that calculate and display the profit margin
// of certain tradeskill actions

import React, { PureComponent } from 'react';
import classes from './DisplayPanel.scss';
import DisplayPanelCard from './DisplayPanelCard/DisplayPanelCard';

class DisplayPanel extends PureComponent{
  render(){
    return (
      // <div className={classes.DisplayPanel}>
        <ul className={classes.DisplayPanel}>
          <DisplayPanelCard/>
          <DisplayPanelCard/>
          <DisplayPanelCard/>
        </ul>
      // </div>
    );
  }
}

export default DisplayPanel;