import React from 'react';
import styles from './index.scss';

class HuaButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { type } = this.props;
    let color;
    switch (type) {
      case 'primary':
        color = '#1890ff';
        break;
      case 'danger':
        color = '#f5222d';
        break;
      default:
        color = '#1890ff';
    }
    return (

        <a href={this.props.href}>
          <button
              onClick={this.props.onClick}
              className={this.props.disable ? styles.hua_button_disable : styles.hua_button_normal}
              style={{ background: color }}
              >
              {this.props.children}
          </button>
        </a>

    );
  }
}
export default HuaButton;
