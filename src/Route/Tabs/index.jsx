import React from 'react'
import HuaTabs from '../../Component/HuaTabs'
import HuaBreadCrumb from '../../Component/HuaBreadCrumb'
import HuaCollapse from '../../Component/HuaCollapse'
export default class Tabs extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      currentTabs: '1',
      activeKey: null,
    }
  }
  handleTabs = (tab) => {
    
    this.setState({
      currentTabs: tab
    })
  }
  handlePanel = (tab) => {
    this.setState({
      activeKey: tab
    }, () => {
      console.log("zzz",this.state.activeKey)
    })
  }
  render(){
    return(
      <React.Fragment>
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

            <HuaBreadCrumb separator=">">
            <HuaBreadCrumb.Item>
              <a href="#">  Application Center</a>
            </HuaBreadCrumb.Item>
            <HuaBreadCrumb.Item>
              <a href="#">  Application List</a>
            </HuaBreadCrumb.Item>
            <HuaBreadCrumb.Item>
              <a href="#"> An Application</a>
            </HuaBreadCrumb.Item>
          </HuaBreadCrumb>


           <HuaCollapse activeKey={this.state.activeKey} onChange={this.handlePanel}>
               <HuaCollapse.Panel key="1" header="This is panel  header 1" value="1">
                  <p>面板一,面板一,面板一,面板一,面板一,面板一</p>
               </HuaCollapse.Panel>

               <HuaCollapse.Panel key="2" header="This is panel  header 2" value="2">
               <p>面板二,面板二,面板二,面板二,面板二,面板二</p>
               </HuaCollapse.Panel>

               <HuaCollapse.Panel key="3" header="This is panel  header 3" value="3">
               <p>面板三,面板三,面板三,面板三,面板三,面板三</p>
               </HuaCollapse.Panel>
            </HuaCollapse>
      </React.Fragment>
    
    )
  }
}