import React from 'react';
import { Icon, Button } from 'antd';
import styles from './index.scss';
const selectedBackgroundColor = 'rgb(226, 226, 226)'

class HuaSelect extends React.Component {
  constructor(props) {

    super(props);
    const options = {}
    this.props.children.forEach(child => {
      const {value:key, children:value} = child.props
      options[key] = value
    })
    this.state = {
      show: false,
      options: options,
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
  onHandleChange = (key) => {
    const {value} = this.props
    if(Array.isArray(value)){
      this.props.onHandleChange([...value, key])
    }else{
      this.props.onHandleChange(key)
    }
    
    this.handleOptions()
  }
  handleOptions = () => {
    this.setState({
      show: !this.state.show,
    });
  }
  componentDidMount(){
    const {value, mode} = this.props
    if(mode=== 'multiple' && !Array.isArray(value)){
      this.props.onHandleChange([value])
    }
  }
  handleDeleteItem = (idx,e) => {
    const {value} = this.props
    e.stopPropagation()
    const multipleValue = value.filter((value,index) =>idx != index )
    this.props.onHandleChange(multipleValue)
  }
  render() {
    const {value, mode, style} = this.props
    return (
      <div style={style} className={styles.hua_select}>
        {mode === 'multiple' ? 
        <ul onClick={this.handleOptions} className={styles.content_group_multiple}>
            {(Array.isArray(value) ? value: [value]).map((valueItem, index) => {
              return(
                <li key={index} className={styles.multiple_item}>
                  <div>{valueItem}</div>
                  <span onClick={this.handleDeleteItem.bind(this,index)}><Icon type="close" theme="outlined" /></span>
                </li>
              )
            })}
        </ul>
        :
        <div style={style} onClick={this.handleOptions} className={styles.content_group}>
        <span className={styles.select_content}>{this.props.value}</span>
        <Icon  type="down" theme="outlined" />
      </div>}

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
