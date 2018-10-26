import React, { PureComponent } from 'react';
import classes from './DisplayPanelCard.scss';
import ItemDisplay from '../../../hoc/ItemDisplay/ItemDisplay';

class DisplayPanelCard extends PureComponent{
  render(){
    return (
      <ul className={classes.DisplayPanelCard}>
        <p>Tempus Fugit</p>
        <ItemDisplay name="One" price={3} color="red"/>
        <ItemDisplay name="One" price={3}/>
        <ItemDisplay name="One" price={3}/>
      </ul>
    );
  }
}

export default DisplayPanelCard;