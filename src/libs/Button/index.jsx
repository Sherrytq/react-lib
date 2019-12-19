import React, { Component } from 'react';
import logo from './logo.png'
import './index.less';

class Button extends Component {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    return (
      <div className='Button'>
        this is Button!
        <img src={logo}/>
      </div>
    );
  }
}

export default Button;