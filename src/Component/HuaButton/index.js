import React from 'react';
import reactCSS from 'reactcss';
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
class HuaButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      type, href, target, onClick, disabled, children, className,
    } = this.props;
    const buttonStyles = reactCSS({
      default: {
        button: {
          background: disabled ? '#d9d9d9' : type ? colors[type].default : '#fff', // eslint-disable-line
          color: type ? '#fff' : 'rgba(0,0,0,.65)',
        },
      },
      // hover: {
      //   button: {
      //     background: colors[type].hover,
      //   },
      // },
      // click: {
      //   button: {
      //     background: colors[type].click,
      //   },
      // },
    });


    return (

        <a href={href} target={href && target}>
          <button
              onClick={onClick}
              disabled={disabled}
              className={ className || (disabled ? styles.hua_button_disable : styles.hua_button_normal)}
              style={buttonStyles.button}
              >
              {children}
          </button>
        </a>
    );
  }
}
export default HuaButton;
