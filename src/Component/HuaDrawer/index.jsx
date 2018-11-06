import React from 'react'
import styles from './index.scss'
export default class HuaDrawer extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    const {dispaly} = this.props
    console.log("AAAA", this.props)
    return(
      <div style={{left: `${dispaly ? '0' : '-500'}px`}} className={styles.hua_drawer}>
        {this.props.children}
      </div>
    )
  }
}