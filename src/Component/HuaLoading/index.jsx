import React from 'react'
import styles from './index.scss'
export default class HuaLoading extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    const {loading} = this.props
    console.log("AAAA", this.props.children)
    if(loading){
      return( 
      <div className={styles.loading}>
        <div className={styles.load}>
        加载中......
        </div>
        <div>
          {this.props.children}
        </div>
      </div>
      )
    }
    return(
      <React.Fragment>
        {this.props.children}
      </React.Fragment>
    )
  }
}