import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import React, { Component } from 'react';
import logo from './logo.png';
import './index.less';

var Button =
/*#__PURE__*/
function (_Component) {
  _inherits(Button, _Component);

  function Button(props, context) {
    _classCallCheck(this, Button);

    return _possibleConstructorReturn(this, _getPrototypeOf(Button).call(this, props, context));
  }

  _createClass(Button, [{
    key: "render",
    value: function render() {
      return React.createElement("div", {
        className: "Button"
      }, "this is Button!", React.createElement("img", {
        src: logo
      }));
    }
  }]);

  return Button;
}(Component);

export default Button;