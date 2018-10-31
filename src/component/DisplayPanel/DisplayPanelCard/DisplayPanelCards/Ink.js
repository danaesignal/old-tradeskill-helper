import React, { PureComponent } from 'react';
import ItemDisplay from '../../../../hoc/ItemDisplay/ItemDisplay';
import classes from './styles.scss'

class Ink extends PureComponent{
  render(props){
    // This card represents milling herbs and selling raw, unprocessed pigment
    const herb = this.props.prepareCommodity('herb');
    const blueInk = this.props.prepareCommodity('blueInk');
    const redInk = this.props.prepareCommodity('redInk');
    const greenPigment = this.props.prepareCommodity('greenPigment');
    let revenue = (herb.yield * -1) + (blueInk.yield + redInk.yield + greenPigment.yield);
    let inTheGreen = revenue > 0 ? "green" : "red";

    console.log(blueInk, redInk);
    return (
      <React.Fragment>
        <p>Common Inks</p>
        <ItemDisplay name={herb.display} value={(herb.yield * -1).toFixed(2)} color="red" readOnly={true}/>
        <ItemDisplay name={redInk.display} value={redInk.yield.toFixed(2)} color="green" readOnly={true}/>
        <ItemDisplay name={blueInk.display} value={blueInk.yield.toFixed(2)} color="green" readOnly={true}/>
        <ItemDisplay name={greenPigment.display} value={greenPigment.yield.toFixed(2)} color="green" readOnly={true}/>
        <div className={classes.divider}></div>
        <ItemDisplay name="Profit" value={revenue.toFixed(2)} color={inTheGreen} readOnly={true}/>
      </React.Fragment>
    );
  }
}

export default Ink;