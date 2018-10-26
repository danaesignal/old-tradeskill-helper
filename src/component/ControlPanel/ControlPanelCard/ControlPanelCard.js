import React, { PureComponent } from 'react';

class ControlPanelCard extends PureComponent{
  render(props){
    return (
      <li>
        <div>{this.props.name}</div>
        <input
          type="text"
          defaultValue={this.props.price.toFixed(2)}
          onBlur={this.props.updateHandler}
          data-item={this.props.item}>
        </input>
      </li>
    );
  }
}

export default ControlPanelCard;