// A collection of <ItemDisplays /> where you can change the associated price of a
// crafting component, which triggers calculations that alter the state accordingly
// Eventually you can swap servers and pull market data to populate the controls.

import React, { PureComponent } from 'react';
import ControlPanelCard from './ControlPanelCard/ControlPanelCard';
import classes from './ControlPanel.scss';

class ControlPanel extends PureComponent{
  render(props){
    let cards = null;
    cards = (this.props.commodities.map(commodity => {
      return (
        <ControlPanelCard
          name={commodity.display}
          key={commodity.item}
          item={commodity.item}
          price={commodity.price}
          updateHandler={this.props.updateHandler}/>
      )
    }));

    return (
      <div className={classes.ControlPanel}>
        <ul>
          {cards}
        </ul>
      </div>
    );
  }
}

export default ControlPanel;