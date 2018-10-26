import React, { Component } from 'react';
import Header from '../../component/Header/Header';
import ControlPanel from '../../component/ControlPanel/ControlPanel';
import DisplayPanel from '../../component/DisplayPanel/DisplayPanel';

class Layout extends Component{
  state = {
    commodities: [
      {item: "herb", display: "Common Herb:", price: 14.00},
      {item: "redPigment", display: "Crimson Pigment", price: 14.00},
      {item: "bluePigment", display: "Ultramarine Pigment", price: 14.00},
      {item: "greenPigment", display: "Viridescent Pigment", price: 14.00},
      {item: "redInk", display: "Crimson Pigment", price: 14.00},
      {item: "blueInk", display: "Ultramarine Pigment", price: 14.00},
      {item: "greenInk", display: "Virisdescent Ink", price: 14.00},
      {item: "tome", display: "Quiet Mind Tome", price: 14.00},
    ]};

  componentWillMount(){
    let savedState = JSON.parse(localStorage.getItem('commodities'));
    console.log(savedState);
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
        <DisplayPanel/>
      </div>
    );
  }
}

export default Layout;