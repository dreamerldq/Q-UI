import React from 'react'
import HuaSelect from '../../Component/HuaSelect'
import HuaTable from '../../Component/HuaTable'
import HuaPagination from '../../Component/HuaPagination'
import HuaTabs from '../../Component/HuaTabs'
import HuaCollapse from '../../Component/HuaCollapse'
import HuaTimeLine from '../../Component/HuaTimeline'
import HuaDrawer from '../../Component/HuaDrawer'
import HuaLoading from '../../Component/HuaLoading'
import HuaLayout from '../../Component/HuaLayout'
import HuaMenu from '../../Component/HuaMenu'
import HuaTransfer from '../../Component/HuaTransfer'
const {SubMenu, MenuItemGroup} = HuaMenu
const { Header, Content, Footer } = HuaLayout
import HuaButton from '../../Component/HuaButton'
import {Button, Icon} from 'antd'
import HuaInputNumber from '../../Component/HuaInputNumber'
import HuaBreadCrumb from '../../Component/HuaBreadCrumb'
import HuaSlider from '../../Component/HuaSlider'
import HuaCheckbox from '../../Component/HuaCheckbox'
const props = {
  name: 'file',
  accept: 'image/*',
  action: '//jsonplaceholder.typicode.com/posts/',
  headers: {
    authorization: 'authorization-text',
  },
};
import { Upload, message } from 'antd';
import HuaUpload from '../../Component/HuaUpload'


    


export default class HuaComponents extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      current: 1,
      pageSize: 10,
      currentTabs:"1",
      activeKey: null,
      loading: true,
      dispaly: false,
      currentMenu: 'mail',
      currentSelect: 'lucy',
      curretnInputNumber: 10,
      sortedInfo: {},
      sliderValue: 0,
      targetKeys:[],
      selectedKeys:[]
    }
  }

 
  handleCurrentPage = (page) =>{
   
    this.setState({
      current: page
    })
  }
  
  handleSizeChange = (pageSize) => {
   
    this.setState({
      pageSize: pageSize
    })
  }
  handleTabs = (tab) => {
    
    this.setState({
      currentTabs: tab
    })
  }
  handleUploadChange = (file) =>{
    if(file.file.status === 'done'){
      message.success(`${file.file.name}上传成功`)
    }
    if(file.file.status === 'error'){
      message.error(`${file.file.name}上传失败`)
    }
  }
  handleMenuChange = (key) => {
    this.setState({
      currentMenu: key
    })
  }
  handleTransfer = (direction, selectedKeys) =>{
    console.log('父组件',selectedKeys)
      this.setState({
        targetKeys:  selectedKeys
      })
  }
 

  handleDisplay = () => {
    this.setState({
      dispaly: !this.state.dispaly
    })
  }

  handleSlider = (value) =>{
    this.setState({
      sliderValue: value
    })
  }
  
  componentDidMount(){
    setTimeout(() => {
      this.setState({
        loading: false
      })
    }, 2000);
  }
  // render(){
  //   return(
  //    <React.Fragment>
  

            
             
         
  //    </React.Fragment>
  //   )
  // }
  // render(){
  //   return(
  //     <HuaLayout>
  //         <Header>
  //             <HuaMenu 
  //               onClick={this.handleMenuChange}
  //               selectedKeys = {[this.state.currentMenu]}
  //               >
  //                 <HuaMenu.Item key="mail">邮箱</HuaMenu.Item>
  //                 <HuaMenu.Item key="app">App</HuaMenu.Item>
  //                 <SubMenu title={<span className="submenu-title-wrapper"><Icon type="setting" />Navigation Three - Submenu</span>}>
  //                   <MenuItemGroup title="Item 1">
  //                     <HuaMenu.Item key="setting:1">Option 1</HuaMenu.Item>
  //                     <HuaMenu.Item key="setting:2">Option 2</HuaMenu.Item>
  //                   </MenuItemGroup>
  //                   <MenuItemGroup title="Item 2">
  //                     <HuaMenu.Item key="setting:3">Option 3</HuaMenu.Item>
  //                     <HuaMenu.Item key="setting:4">Option 4</HuaMenu.Item>
  //                   </MenuItemGroup>
  //                 </SubMenu>
  //             </HuaMenu>
  //         </Header>
  //         <Content>
  //            <div style={{width: '100%', background: '#f0f0f0'}}>内容</div>
  //         </Content>
  //         <Footer>
  //             底部
  //         </Footer>
  //     </HuaLayout>
  //   )
  // }
  render(){
    const {targetKeys, selectedKeys} = this.state
    
    return(
      <HuaLoading >
      
      
       
           

           
             
           
             </HuaLoading>
  
    )
  }
}