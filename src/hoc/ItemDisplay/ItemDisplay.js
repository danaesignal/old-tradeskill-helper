// A reusable item display component. Accepts name and a number as input and displays them both.
import React, { PureComponent } from 'react';

class ItemDisplay extends PureComponent{
  render(props){
    return (
      <li>
        <div>{this.props.name}</div>
        <input
          type="text"
          defaultValue={this.props.price}
          onBlur={this.props.onBlur}
          data-item={this.props.dataItem}
          style={{'color': this.props.color}}>
        </input>
      </li>
    );
  }
}

export default ItemDisplay;