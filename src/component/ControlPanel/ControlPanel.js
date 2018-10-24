// A collection of <ItemDisplays /> where you can change the associated price of a
// crafting component, which triggers calculations that alter the state accordingly
// Eventually you can swap servers and pull market data to populate the controls.

import React, { PureComponent } from 'react';
import ControlPanelCard from './ControlPanelCard/ControlPanelCard';
import classes from './ControlPanel.scss';

class ControlPanel extends PureComponent{
  render(){
    return (
      <div className={classes.ControlPanel}>
        <ul>
          {/* These names eventually be pulled from state along w/ prices */}
          <ControlPanelCard name="Common Herb"/>
          <ControlPanelCard name="Crimson Pigment"/>
          <ControlPanelCard name="Ultramarine Pigment"/>
          <ControlPanelCard name="Viridescent Pigment"/>
          <ControlPanelCard name="Quiet Mind Tome"/>
          <ControlPanelCard name="Crimson Ink"/>
          <ControlPanelCard name="Ultramarine Ink"/>
          <ControlPanelCard name="Viridescent Ink"/>
        </ul>
      </div>
    );
  }
}

export default ControlPanel;