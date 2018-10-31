// Calculates and displays various tradeskill products based on input

import React, { PureComponent } from 'react';
import classes from './DisplayPanelCard.scss';
import Raw from './DisplayPanelCards/Raw';
import Ink from './DisplayPanelCards/Ink';
import InkPlus from './DisplayPanelCards/InkPlus';
import Tome from './DisplayPanelCards/Tome';
import TomePlus from './DisplayPanelCards/TomePlus';

class DisplayPanelCard extends PureComponent{
  render(props){
    const prepareCommodity = (commodityRequest) => {
      const itemIndex = this.props.commodities.findIndex(commodity => commodity.item === commodityRequest);
      let commodityRecord = { ...this.props.commodities[itemIndex]};
      commodityRecord.yield = commodityRecord.price * this.props.millingRatios[commodityRequest];
      return commodityRecord
    };

    let card = null;

    switch(this.props.cardType){
      case "raw":
        card = (<Raw prepareCommodity={prepareCommodity}/>);
        break;
      case "ink":
        card = (<Ink prepareCommodity={prepareCommodity}/>);
        break;
      case "inkPlus":
        card = (<InkPlus prepareCommodity={prepareCommodity}/>);
        break;
      case "tome":
        card = (<Tome prepareCommodity={prepareCommodity}/>);
        break;
      case "tomePlus":
        card = (<TomePlus prepareCommodity={prepareCommodity}/>);
        break;
      default:
        card = null;
    }

    return (
      <ul className={classes.DisplayPanelCard}>
        {card}
      </ul>
    );
  }
}

export default DisplayPanelCard;