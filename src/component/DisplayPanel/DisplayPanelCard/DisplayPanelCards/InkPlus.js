import React, { PureComponent } from 'react';
import ItemDisplay from '../../../../hoc/ItemDisplay/ItemDisplay';
import classes from './styles.scss'

class InkPlus extends PureComponent{
  render(props){
    // This card represents milling herbs and selling raw, unprocessed pigment
    const herb = this.props.prepareCommodity('herb');
    const blueInk = this.props.prepareCommodity('blueInk');
    const redInk = this.props.prepareCommodity('redInk');
    const greenInk = this.props.prepareCommodity('greenInk');
    let revenue = (herb.yield * -1) + (blueInk.yield + redInk.yield + greenInk.yield);
    let inTheGreen = revenue > 0 ? "green" : "red";

    return (
      <React.Fragment>
        <p>Common and Uncommon Inks</p>
        <ItemDisplay name={herb.display} value={(herb.yield * -1).toFixed(2)} color="red" readOnly={true}/>
        <ItemDisplay name={redInk.display} value={redInk.yield.toFixed(2)} color="green" readOnly={true}/>
        <ItemDisplay name={blueInk.display} value={blueInk.yield.toFixed(2)} color="green" readOnly={true}/>
        <ItemDisplay name={greenInk.display} value={greenInk.yield.toFixed(2)} color="green" readOnly={true}/>
        <div className={classes.divider}></div>
        <ItemDisplay name="Profit" value={revenue.toFixed(2)} color={inTheGreen} readOnly={true}/>
      </React.Fragment>
    );
  }
}

export default InkPlus;