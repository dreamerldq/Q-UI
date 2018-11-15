import React from 'react'
import styles from './index.scss'
import classnames from 'classnames'
class HuaLayout extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    const className = this.props.className ? this.props.className : styles.hua_layout
    let hasSider = false
    const layout = {
      sider: '',
      layout: []
    }
    this.props.children.forEach((child) => {
      console.log(child.type.name)
      if(child.type.name === 'LayoutSider'){
        layout.sider = child
        hasSider = true
      }else{
        layout.layout.push(child)
      }
    })
    if(hasSider){
      return(
        <div className={classnames(className, styles.siderContent)}>
          <div className={styles.sider}>{layout.sider}</div>
          <div className={className}>
            {layout.layout}
          </div>
        </div>
      )
    }
    return(
      <div style={this.props.style} className={className}>
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

const LayoutSider = (props) => {
  return(
    <div className={styles.sider}>
      {props.children}
    </div>
  )
} 

HuaLayout.Header = LayoutHeader
HuaLayout.Content = LayoutContent
HuaLayout.Footer = LayoutFooter
HuaLayout.Sider = LayoutSider

export default HuaLayout