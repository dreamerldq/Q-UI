import React from 'react';

import injectSheet from 'react-jss';
import classnames from 'classnames';
import styles from './index.scss';

const colors = {
  primary: {
    default: '#1890ff',
    hover: '#147ddf',
    click: '#0058aa',
  },
  danger: {
    default: '#f5222d',
    hover: '#ce1e27',
    click: '#91030a',
  },

};

const myStyles = {
  myButton: {
    background: ({ disabled, type }) => (disabled ? '#d9d9d9' : type ? colors[type].default : '#fff'),// eslint-disable-line
    color: ({ type }) => type && '#fff',
    '&:hover': {
      background: ({ disabled, type }) => (disabled ? '#d9d9d9' : colors[type] ? colors[type].hover : '#fff'),// eslint-disable-line
      border: ({ disabled, type }) => ( colors[type] ? 'none' : 'solid 1px #1890ff'),// eslint-disable-line
    },
    '&:active': {
      background: ({ disabled, type }) => (disabled ? '#d9d9d9' : colors[type] ? colors[type].click : '#fff'),// eslint-disable-line
      color: ({ type }) => type && '#fff',
      border: ({ disabled, type }) => ( colors[type] ? 'none' : 'solid 1px #0058aa'),// eslint-disable-line
    },
  },
};
class HuaButton extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    const {
      type, href, target, onClick, disabled, children, className, classes,
    } = this.props;
    return (

    // <a href={href} target={href && target}>
          <button
              onClick={onClick}
              disabled={disabled}
              className={disabled ? classnames(styles.hua_button_disable, classes.myButton) : classnames(styles.hua_button_normal, classes.myButton)}
              >
              {children}
          </button>
    // </a>
    );
  }
}
export default injectSheet(myStyles)(HuaButton);
