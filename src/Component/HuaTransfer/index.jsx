import React from 'react'
import styles from './index.scss'
import HuaButton from '../HuaButton'
import { Icon, Checkbox } from 'antd'
import HuaCheckbox from '../HuaCheckbox'
export default class HuaTransfer extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      originData: this.transferData('origin'),
      targetData: this.transferData('target'),
      originSelectedKeys: [],
      targetSelectedKeys:[]
    }
  }
  componentWillReceiveProps(nextprops){
    this.setState({
      originData: this.transferData('origin', nextprops),
      targetData: this.transferData('target',nextprops)
    })
  }
  transferData = (type, nextprops) => {
    if(nextprops){
      return  nextprops.dataSource.filter((item) => {
        if(type === 'target'){
          if(nextprops.targetKeys.indexOf(item.key) == '-1'){
            return false
          }else{
             return true
          }
        }else{
          if(nextprops.targetKeys.indexOf(item.key) == '-1'){
            return true
          }else{
           return false
          }
        }
      })
    }
    return  this.props.dataSource.filter((item) => {
      if(type === 'target'){
        if(this.props.targetKeys.indexOf(item.key) == '-1'){
          return false
        }else{
          return true
        }
      }else{
        if(this.props.targetKeys.indexOf(item.key) == '-1'){
          return true
        }else{
          return false
        }
      }
    })
  }
  handleTransfer = (direction) => {
    let selectedKeys
    if(direction === 'right'){
       selectedKeys = [...this.props.targetKeys,...this.state.targetSelectedKeys]
      this.setState({
        targetSelectedKeys:[]
      })
    }else{
       selectedKeys = this.props.targetKeys.filter((item) => {
        if(this.state.originSelectedKeys.indexOf(item) == '-1'){
          return true
        }else{
          return false
        }
      })
      this.setState({
        originSelectedKeys:[]
      })
    }
    console.log("Zzzzz",selectedKeys)
    this.props.onChange(direction, selectedKeys)
  }
  handleItem = (key, direction) => {
    console.log("AAAA", key)
    if(direction === 'right'){
      this.setState({
        targetSelectedKeys: [...this.state.targetSelectedKeys, key]
      })
    }else{
      this.setState({
        originSelectedKeys: [...this.state.originSelectedKeys, key]
      })
    }
  }
  render(){
    const {originData, targetData} = this.state
    const {titles} = this.props
    return(
      <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.title}>
              <span>{titles[0]}</span>
              <span>{originData.length}</span>
            </div>
            <div className={styles.origin}>
            {
              originData.map((item)=>{
                return <HuaCheckbox key={item.key} onChange={this.handleItem.bind(this,item.key, 'right')}>{item.title}</HuaCheckbox>
              })
            }
          </div>
          </div>
          
          <HuaButton onClick={this.handleTransfer.bind(this,'left')}>
            <Icon type="left" />  
          </HuaButton>
          <HuaButton onClick={this.handleTransfer.bind(this,'right')}>
            <Icon type="right" />  
          </HuaButton>
          <div className={styles.content}>
          <div className={styles.title}>
              <span>{titles[1]}</span>
              <span>{targetData.length}</span>
            </div>
            <div className={styles.target}>
          {
              targetData.map((item)=>{
                return <HuaCheckbox key={item.key} onChange={this.handleItem.bind(this,item.key, 'left')}>{this.props.render(item)}</HuaCheckbox>
              })
            }
          </div>
          </div>
          
      </div>
    )
  }
}