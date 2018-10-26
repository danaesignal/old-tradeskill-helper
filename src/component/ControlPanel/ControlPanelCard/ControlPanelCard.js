import React, { PureComponent } from 'react';
import ItemDisplay from '../../../hoc/ItemDisplay/ItemDisplay';

class ControlPanelCard extends PureComponent{
  render(props){
    return (
      <ItemDisplay
        name={this.props.name}
        price={this.props.price.toFixed(2)}
        onBlur={this.props.updateHandler}
        dataItem={this.props.item}
      />
    );
  }
}

export default ControlPanelCard;