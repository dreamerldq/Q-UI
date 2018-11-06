import React from 'react';
import { Icon, Button } from 'antd';
import styles from './index.scss';
const selectedBackgroundColor = 'rgb(226, 226, 226)'

class HuaSelect extends React.Component {
  constructor(props) {

    super(props);
    const {defaultValue} = this.props
    const options = {}
    this.props.children.forEach(child => {
      const {value:key, children:value} = child.props
      options[key] = value
    })
    this.state = {
      show: false,
      currentValue: options[defaultValue],
      options: options
    };
  }
  renderChildren = () => {
    return React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        onHandleChange: this.onHandleChange,
        onHandleBlur: this.onHandleBlur,
        currentValue: this.props.value
      })
    })
  }
  onHandleChange = (key) =>{
    this.setState({
      currentValue: this.state.options[key]
    })
    this.props.onHandleChange(key)
    this.handleOptions()
  }
  handleOptions = () => {
    this.setState({
      show: !this.state.show,
    });
  }
  render() {
    return (
      <div className={styles.hua_select}>
        <div onClick={this.handleOptions} className={styles.content_group}>
          <span className={styles.select_content}>{this.state.currentValue}</span>
          <Icon  type="down" theme="outlined" />
        </div>

        <div style={{ display: this.state.show ? 'block' : 'none' }} className={styles.options}>
          {this.renderChildren()}
        </div>
      </div>
    );
  }
}
const HuaSelectOption = (props) =>{
 const onHandleChange = (e) =>{
    e.stopPropagation();
    props.onHandleChange(props.value)
  }
  return(
    <React.Fragment>
      <li key={props.value} 
        style={{background: props.value == props.currentValue? selectedBackgroundColor : ''}} 
        onClick={onHandleChange}>{props.children}</li>
    </React.Fragment>
  )
}
export default  HuaSelect;
HuaSelect.Option = HuaSelectOption
