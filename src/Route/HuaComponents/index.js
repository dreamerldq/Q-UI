import React from 'react'
import HuaSelect from '../../Component/HuaSelect'
import HuaTable from '../../Component/HuaTable'
import HuaPagination from '../../Component/HuaPagination'
import HuaTabs from '../../Component/HuaTabs'
import HuaCollapse from '../../Component/HuaCollapse'
import notification from '../../Component/HuaNotification'
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
  handlePanel = (tab) => {
    this.setState({
      activeKey: tab
    }, () => {
      console.log("zzz",this.state.activeKey)
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
  notice = (value) => {
    switch(value){
      case 1:
      notification.open({
        message: 'Notification Title 1',
        description: 'I will never close automatically. I will be close automatically. I will never close automatically.',
        duration: 3
      })
      break;

      case 2:
      notification.open({
        message: 'Notification Title 2',
        description: 'I will never close automatically. I will be close automatically. I will never close automatically.',
        duration: 3
      })
      break;

      case 3:
      notification.open({
        message: 'Notification Title 3',
        description: 'I will never close automatically. I will be close automatically. I will never close automatically.',
        duration: 3
      })
      break;

      case 4:
      notification.open({
        message: 'Notification Title 4',
        description: 'I will never close automatically. I will be close automatically. I will never close automatically.',
        duration: 3
      })
      break;

      case 5:
      notification.open({
        message: 'Notification Title 5',
        description: 'I will never close automatically. I will be close automatically. I will never close automatically.',
        duration: 3
      })
      break;
    }
    
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
  

            // <HuaBreadCrumb separator=">">
            //   <HuaBreadCrumb.Item>
            //     <a href="#">  Application Center</a>
            //   </HuaBreadCrumb.Item>
            //   <HuaBreadCrumb.Item>
            //     <a href="#">  Application List</a>
            //   </HuaBreadCrumb.Item>
            //   <HuaBreadCrumb.Item>
            //     <a href="#"> An Application</a>
            //   </HuaBreadCrumb.Item>
            // </HuaBreadCrumb>
             
         
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
      
      
        <HuaCheckbox>
          
        </HuaCheckbox>
           

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
             
             <Button onClick={this.notice.bind(this, 1)}>按钮1</Button>
             <Button onClick={this.notice.bind(this, 2)}>按钮2</Button>
             <Button onClick={this.notice.bind(this, 3)}>按钮3</Button>
             <Button onClick={this.notice.bind(this, 4)}>按钮4</Button>
             <Button onClick={this.notice.bind(this, 5)}>按钮5</Button>
             <Button onClick={this.notice.bind(this, 6)}>按钮6</Button>
             <HuaDrawer dispaly={this.state.dispaly}>
               抽屉
             </HuaDrawer>
             <Button onClick={this.handleDisplay}>显示</Button> */}
             </HuaLoading>
  //     <Upload {...props}>
  //   <Button>
  //     <Icon type="upload" /> Click to Upload
  //   </Button>
  // </Upload>
  // <HuaUpload {...props} 
  //  onChange={this.handleUploadChange}
  // >
  //   <span><Icon type="upload"/>Click to Upload</span>
  // </HuaUpload>
    )
  }
}