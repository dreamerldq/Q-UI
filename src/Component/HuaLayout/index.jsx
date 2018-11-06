import React from 'react'
import styles from './index.scss'
class HuaLayout extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div className={styles.hua_layout}>
        {this.props.children}
      </div>
    )
  }
}

class LayoutHeader extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div className={styles.header}>
        {this.props.children}
      </div>
    )
  }
}

class LayoutContent extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div className={styles.content}>
          {this.props.children}
      </div>
    )
  }
}
class LayoutFooter extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div className={styles.footer}>
        {this.props.children}
      </div>
    )
  }
}

HuaLayout.Header = LayoutHeader
HuaLayout.Content = LayoutContent
HuaLayout.Footer = LayoutFooter

export default HuaLayout