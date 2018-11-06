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
const {SubMenu, MenuItemGroup} = HuaMenu
const { Header, Content, Footer } = HuaLayout
import HuaButton from '../../Component/HuaButton'
import {Button, Icon} from 'antd'
const dataSource = [{
  key: '1',
  name: '胡彦斌',
  age: 32,
  address: '西湖区湖底公园1号',
  phone: '175165160549'
}, {
  key: '2',
  name: '胡彦祖',
  age: 42,
  address: '西湖区湖底公园1号'
}];

const columns = [
  {
    title: '序号',
    dataIndex: 'key',
    key: 'key',
    render: (text, record, index) => {
      
      return(
        <span style={{color:'red'}}>
        <Button style={{width:'100px'}} type="primary">{text}</Button>
      </span>
      )
    },
    width: 100
  },
  {
  title: '姓名',
  dataIndex: 'name',
  key: 'name',
  render: (text, record, index) => {
    return(
      <span style={{color:'red'}}>
      {text}
    </span>
    )
  },
  width: 100
},
 {
  title: '年龄',
  dataIndex: 'age',
  key: 'age',
  width: 100
},
 {
  title: '住址',
  dataIndex: 'address',
  key: 'address',
  width: 150
}];
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
      currentMenu: 'mail'
    }
  }
  handleChange = (value) =>{
    console.log("Select Value:", value)
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

  handleMenuChange = (key) => {
    console.log("AAAAA", key)
    this.setState({
      currentMenu: key
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
  render(){
    return(
     <React.Fragment>
        <HuaButton  type="primary">按钮</HuaButton>
        <HuaButton type="danger">按钮</HuaButton>
     </React.Fragment>
    )
  }
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
  // render(){
  //   const {current, pageSize} = this.state
  //   return(
  //     <HuaLoading loading={this.state.loading}>
      
          
  //           <HuaSelect defaultValue="lucy" onHandleChange={this.handleChange}>
  //             <HuaSelect.Option value="jack">Jack</HuaSelect.Option>
  //             <HuaSelect.Option value="lucy">Lucy</HuaSelect.Option>
  //             <HuaSelect.Option value="Yiminghe">yiminghe</HuaSelect.Option>
  //           </HuaSelect>
         
          
          
  //           <HuaTable
  //             dataSource={dataSource}
  //             columns={columns}
  //             bordered
  //             loading
  //             local={{
  //               emptyText: '暂无数据'
  //             }}
  //             />
          
  //           <HuaPagination
  //            onChange={this.handleCurrentPage}
  //            onShowSizeChange={this.handleSizeChange}
  //            total={40}
  //            pageSize={pageSize}
  //            current={current}
           
  //           ></HuaPagination>
  //           <HuaTabs activeKey={this.state.currentTabs} onChange={this.handleTabs}>
  //              <HuaTabs.Item tab="一" key="1">
  //                 <div>第一页</div>
  //              </HuaTabs.Item >
  //              <HuaTabs.Item tab="二" key="2">
  //                 <div>第二页</div>
  //              </HuaTabs.Item>
  //              <HuaTabs.Item tab="三" key="3">
  //                 <div>第三页</div>
  //              </HuaTabs.Item>
  //           </HuaTabs>

  //           <HuaCollapse activeKey={this.state.activeKey} onChange={this.handlePanel}>
  //              <HuaCollapse.Panel key="1" header="This is panel  header 1" value="1">
  //                 <p>面板一,面板一,面板一,面板一,面板一,面板一</p>
  //              </HuaCollapse.Panel>

  //              <HuaCollapse.Panel key="2" header="This is panel  header 2" value="2">
  //              <p>面板二,面板二,面板二,面板二,面板二,面板二</p>
  //              </HuaCollapse.Panel>

  //              <HuaCollapse.Panel key="3" header="This is panel  header 3" value="3">
  //              <p>面板三,面板三,面板三,面板三,面板三,面板三</p>
  //              </HuaCollapse.Panel>
  //           </HuaCollapse>
  //            <HuaTimeLine>
  //               <HuaTimeLine.Item key="1" color="green">
  //                 <p>Create a services site 2015-09-01</p>
  //                 <p>Create a services site 2015-09-01</p>
  //                 <p>Create a services site 2015-09-01</p>
  //                 <p>Create a services site 2015-09-01</p>
  //                 </HuaTimeLine.Item>
  //               <HuaTimeLine.Item key="2">Solve initial network problems 2015-09-01</HuaTimeLine.Item>
  //               <HuaTimeLine.Item key="3">Technical testing 2015-09-01</HuaTimeLine.Item>
  //               <HuaTimeLine.Item key="4">Network problems being solved 2015-09-01</HuaTimeLine.Item>
  //            </HuaTimeLine>
  //            <Button onClick={this.notice.bind(this, 1)}>按钮1</Button>
  //            <Button onClick={this.notice.bind(this, 2)}>按钮2</Button>
  //            <Button onClick={this.notice.bind(this, 3)}>按钮3</Button>
  //            <Button onClick={this.notice.bind(this, 4)}>按钮4</Button>
  //            <Button onClick={this.notice.bind(this, 5)}>按钮5</Button>
  //            <Button onClick={this.notice.bind(this, 6)}>按钮6</Button>
  //            <HuaDrawer dispaly={this.state.dispaly}>
  //              抽屉
  //            </HuaDrawer>
  //            <Button onClick={this.handleDisplay}>显示</Button>
  //            </HuaLoading>
  //   )
  // }
}