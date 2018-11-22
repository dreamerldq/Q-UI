import React from 'react'
import {Input} from 'antd'
import styles from './index.scss'
class HuaInput extends React.Component{
  constructor(props){
    super(props)
  }
  handleChange = (e) => {
    this.props.onChange(e)
  }
  render(){
    const {label,isRequired, type} = this.props
    return(
      <div className={styles.input_block}>
        <div className={styles.label_group}>
        
        { isRequired ? <span className={styles.required}>*</span>: null}
        
        <span className={styles.label}>{`${label ||'标签'}:`}</span>
      </div>
      <div className={styles.input}>
       <Input onChange={this.handleChange} type={type} placeholder={label}/>
      </div>
      </div>
      
    )
  }
}
export default HuaInput