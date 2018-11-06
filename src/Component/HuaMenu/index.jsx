import React from 'react'
import styles from './index.scss'
export default class HuaMenu extends React.Component{
  constructor(props){
    super(props)
  }
  enhanceMenuItem = () => {
    return this.props.children.map((child) => {
        return React.cloneElement(child,{value: child.key, handleMenuItem: this.props.onClick, selectedKeys: this.props.selectedKeys})
    })
  }
  render(){
    const {selectedKeys} = this.props
    return(
      <div className={styles.container}>
          {this.enhanceMenuItem()}
      </div>
    )
  }
}
class MenuItem extends React.Component{
  constructor(props){
    super(props)
    
  }
  handleMenuItem = (value) => {
    this.props.handleMenuItem(value)
  }
  render(){
    const { selectedKeys, value, handleMenuItem } = this.props
    return(
      <div onClick={this.handleMenuItem.bind(this, value)} 
        className={selectedKeys[0] === value ? styles.menu_item_activate : styles.menu_item_normal}>
        {this.props.children}
      </div>
    )
  }
}
class SubMenu extends React.Component{
  constructor(props){
    super(props)
    this.state={
      show: false
    }
  }
  enhanceMenuTitle = () => {
    const {selectedKeys, value} = this.props
    return React.cloneElement(this.props.title, { className: selectedKeys[0] === value ? styles.menu_item_activate : styles.menu_item_normal})
  }
  enhanceMenuItem = () => {
    return this.props.children.map((child) => {
        return React.cloneElement(child,{value: child.key, handleMenuItem: this.props.handleMenuItem, selectedKeys: this.props.selectedKeys})
    })
  }

  handleShow = () => {
    this.setState({
      show: !this.state.show
    })
  }
  render(){
    return(
      <div onMouseLeave={this.handleShow} onMouseEnter={this.handleShow}  className={styles.sub_menu }>
        <div className={styles.sub_menu_title}>
          {this.enhanceMenuTitle()}
        </div>
        {
          this.state.show ? <div className={styles.menu_item_group}>
            {this.enhanceMenuItem()}
          </div> : null
        }
      </div>
    )
  }
}

class MenuItemGroup extends React.Component{
  constructor(props){
    super(props)
  }
  enhanceMenuItem = () => {
    return this.props.children.map((child) => {
        return React.cloneElement(child,{ key: child.title, title: child.title ,value: child.key, handleMenuItem: this.props.handleMenuItem, selectedKeys: this.props.selectedKeys})
    })
  }
  render(){
    return(
      <div >
        <div className={styles.group_title}>{this.props.title}</div>
        {this.enhanceMenuItem()}
      </div>
    )
  }
}
HuaMenu.MenuItemGroup = MenuItemGroup
HuaMenu.SubMenu = SubMenu
HuaMenu.Item = MenuItem