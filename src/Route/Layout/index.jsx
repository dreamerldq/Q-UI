import React from 'react'
import HuaLayout from '../../Component/HuaLayout'
const { Header, Content, Footer } = HuaLayout
import HuaHeader from '../../Component/Header'
export default class Layout extends React.Component{
  render(){
    return(
      <HuaLayout>
        <Header>
          <HuaHeader/>
        </Header>
        <Content>
            {this.props.children}
        </Content>
      </HuaLayout>
    )
  }
}