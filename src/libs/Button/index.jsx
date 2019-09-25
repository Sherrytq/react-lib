import React, { Component } from 'react';
import './index.less';

class Button extends Component {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    return (
      <div className='Button'>
        this is Button!
      </div>
    );
  }
}

export default Button;