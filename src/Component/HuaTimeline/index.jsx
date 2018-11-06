import React from 'react'
import styles from './index.scss'
export default class HuaTimeLine extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <ul className={styles.hua_timeline}>
        {this.props.children.map((child,index) => {
          return React.cloneElement(
            child,
            {
              idx: index,
              count: this.props.children.length
            }
          )
        })}
      </ul>
    )
  } 
}

class TimeLineItem extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    const {idx, count, color} = this.props
    
    return(
      <React.Fragment>
          <li className={styles.hua_timeline_item}>
        
            <div style={{borderColor:`${color}`}}  className={styles.timeline_icon}></div>
            <div className={styles.timeline_content}>
              {this.props.children}
            </div>
            <div style={{display: `${(idx + 1) == count ? 'none' : 'block'}`}} className={styles.timeline_line}></div>
          </li>
      </React.Fragment>
      
    )
  } 
}
HuaTimeLine.Item = TimeLineItem