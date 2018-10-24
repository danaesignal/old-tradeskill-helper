import React, { PureComponent } from 'react';

class ControlPanelCard extends PureComponent{
  render(props){
    return (
      <li>
        <div>{this.props.name}</div>
        <input type="text" style={{'width': '50px'}}></input>
      </li>
    );
  }
}

export default ControlPanelCard;