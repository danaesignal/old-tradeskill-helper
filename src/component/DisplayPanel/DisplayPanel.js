// Holds assorted <DisplayPanelCard />s that calculate and display the profit margin
// of certain tradeskill actions

import React, { PureComponent } from 'react';
import classes from './DisplayPanel.scss';
import DisplayPanelCard from './DisplayPanelCard/DisplayPanelCard';

class DisplayPanel extends PureComponent{
  render(props){
    return (
      // <div className={classes.DisplayPanel}>
        <ul className={classes.DisplayPanel}>
          <DisplayPanelCard commodities={this.props.commodities} cardType="raw" millingRatios={this.props.millingRatios}/>
          <DisplayPanelCard commodities={this.props.commodities} cardType="ink" millingRatios={this.props.millingRatios}/>
          <DisplayPanelCard commodities={this.props.commodities} cardType="inkPlus" millingRatios={this.props.millingRatios}/>
          <DisplayPanelCard commodities={this.props.commodities} cardType="tome" millingRatios={this.props.millingRatios}/>
          <DisplayPanelCard commodities={this.props.commodities} cardType="tomePlus" millingRatios={this.props.millingRatios}/>
        </ul>
      // </div>
    );
  }
}

export default DisplayPanel;