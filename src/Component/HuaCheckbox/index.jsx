import React from 'react'
import styles from './index.scss'
export default class HuaCheckbox extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div className={styles.container}>
        <input type="checkbox"/>
      </div>
    )
  }
}