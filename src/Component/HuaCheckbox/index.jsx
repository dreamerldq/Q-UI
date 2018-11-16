import React from 'react'
import styles from './index.scss'
import { Icon } from 'antd'
export default class HuaCheckbox extends React.Component{
  constructor(props){
    super(props)
    
  }
  handleCheckbox = (e) => {
    console.log(e.target.checked)
    this.props.onChange(e.target.checked, this.props.children)
  }
  render(){
    return(
      <div className={styles.container}>
        <label className={styles.checkbox} htmlFor={this.props.children}>
          {this.props.checkeds ?
          <div className={styles.checkbox_inner}>
            <Icon type="check" />
          </div>:
        null}
        </label>
        <input className={styles.checkbox_input} id={this.props.children} checked={this.props.checkeds} onChange={this.handleCheckbox}  type="checkbox"/>
        <span style={{color: 'black'}}>{this.props.children}</span>
      </div>
    )
  }
}
class CheckboxGroup extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      checkeds:[]
    }
  }
  handleCheckbox = (value, key) =>{
    this.props.onChange(value, key)
  }
  render(){
    const {options, defaultValue} = this.props
    
    return(
      <React.Fragment>
        {
          options.map((option) => {
            let checkeds = false
            defaultValue.forEach(element => {
              if(element === option.value){
                checkeds = true
              }
            });
            return <HuaCheckbox checkeds={checkeds} key={option.value} onChange={this.handleCheckbox}>{option.label}</HuaCheckbox>
          })
        }
      </React.Fragment>
    )
  }
}
HuaCheckbox.CheckboxGroup = CheckboxGroup