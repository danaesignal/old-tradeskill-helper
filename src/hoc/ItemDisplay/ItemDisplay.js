// A reusable item display component. Accepts name and a number as input and displays them both.
import React, { PureComponent } from 'react';

class ItemDisplay extends PureComponent{
  render(props){
    return (
      <li>
        <div>{this.props.name}</div>
        <input
          type="text"
          defaultValue={this.props.price.toFixed(2)}
          onBlur={this.props.updateHandler}
          data-item={this.props.item}
          style={{'color': this.props.color}}>
        </input>
      </li>
    );
  }
}

export default ItemDisplay;