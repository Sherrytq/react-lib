import React, { Component } from 'react';
import {Button}  from 'react-libs/libs/index'

class ButtonDemo extends Component {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    return (
      <div className='App'>
        <Button></Button>
      </div>
    );
  }
}

export default ButtonDemo;