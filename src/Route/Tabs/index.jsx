import React from 'react'
import HuaTabs from '../../Component/HuaTabs'
export default class Tabs extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      currentTabs: '1'
    }
  }
  handleTabs = (tab) => {
    
    this.setState({
      currentTabs: tab
    })
  }
  render(){
    return(
      <HuaTabs activeKey={this.state.currentTabs} onChange={this.handleTabs}>
               <HuaTabs.Item tab="一" key="1">
                  <div>第一页</div>
               </HuaTabs.Item >
               <HuaTabs.Item tab="二" key="2">
                  <div>第二页</div>
               </HuaTabs.Item>
               <HuaTabs.Item tab="三" key="3">
                  <div>第三页</div>
               </HuaTabs.Item>
            </HuaTabs>
    )
  }
}