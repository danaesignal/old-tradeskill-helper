import React, { Component } from 'react';
import Header from '../../component/Header/Header';
import ControlPanel from '../../component/ControlPanel/ControlPanel';
import DisplayPanel from '../../component/DisplayPanel/DisplayPanel';

class Layout extends Component{
  state = {
    commodities: [
      {item: "herb", display: "Common Herb:", price: 12.64},
      {item: "redPigment", display: "Crimson Pigment", price: 4.44},
      {item: "bluePigment", display: "Ultramarine Pigment", price: 0.12},
      {item: "greenPigment", display: "Viridescent Pigment", price: 140.00},
      {item: "tome", display: "Quiet Mind Tome", price: 84.60},
      {item: "redInk", display: "Crimson Ink", price: 11.04},
      {item: "blueInk", display: "Ultramarine Ink", price: 0.22},
      {item: "greenInk", display: "Viridescent Ink", price: 98.00},
    ],
    millingRatios: {
      herb: 1,
      redPigment: 0.31,
      bluePigment: 0.82,
      greenPigment: 0.13,
      tome: (0.04968641114982578397212543554007+0.00319396051103368176538908246225),
      redInk: 0.31,
      blueInk: 0.82,
      greenInk: 0.13,
    }, };

  componentWillMount(){
    let savedState = JSON.parse(localStorage.getItem('commodities'));
    console.log(this.state.millingRatios);
    if(savedState !== null){
      this.setState({commodities: savedState});
    }
  }

  handlePriceChange = (e) => {
    if(isNaN(e.target.value) || e.target.value === ""){
      e.target.value = 0
    }
    const newPrice = parseFloat(e.target.value);
    const commodities = [...this.state.commodities];
    const itemToUpdate = e.target.dataset.item;
    const itemIndex = commodities.findIndex(commodity => commodity.item === itemToUpdate);
    const updatedItem = { ...commodities[itemIndex], price: newPrice};
    commodities[itemIndex] = updatedItem;
    this.setState({commodities: [...commodities]})
    localStorage.setItem('commodities', JSON.stringify(commodities));
    e.target.value = newPrice.toFixed(2);
  };

  render(){
    return (
      <div>
        <Header/>
        <ControlPanel commodities={this.state.commodities} updateHandler={this.handlePriceChange}/>
        <DisplayPanel commodities={this.state.commodities} millingRatios={this.state.millingRatios}/>
      </div>
    );
  }
}

export default Layout;