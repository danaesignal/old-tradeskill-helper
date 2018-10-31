import React, { PureComponent } from 'react';
import ItemDisplay from '../../../../hoc/ItemDisplay/ItemDisplay';
import classes from './styles.scss'

class Tome extends PureComponent{
  render(props){
    // This card represents milling herbs and selling raw, unprocessed pigment
    // const amount = 20;
    const herb = this.props.prepareCommodity('herb');
    const tome = this.props.prepareCommodity('tome');
    const greenPigment = this.props.prepareCommodity('greenPigment');
    let revenue = (herb.yield * -1) + tome.yield + greenPigment.yield;
    let inTheGreen = revenue > 0 ? "green" : "red";

    return (
      <React.Fragment>
        <p>Tomes</p>
        <ItemDisplay name={herb.display} value={(herb.yield * -1).toFixed(2)} color="red" readOnly={true}/>
        <ItemDisplay name={tome.display} value={tome.yield.toFixed(2)} color="green" readOnly={true}/>
        <ItemDisplay name={greenPigment.display} value={greenPigment.yield.toFixed(2)} color="green" readOnly={true}/>
        <div className={classes.divider}></div>
        <ItemDisplay name="Profit" value={revenue.toFixed(2)} color={inTheGreen} readOnly={true}/>
      </React.Fragment>
    );
  }
}

export default Tome;