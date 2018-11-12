import HuaTransfer from '../../Component/HuaTransfer'
import React from 'react'
const dataSourceTransfer=
      [
        {
          title: 'title1',
          key: 'title1',
          index: 0
        },
        {
          title: 'title2',
          key: 'title2',
          index: 1
        },
        {
          title: 'title3',
          key: 'title3',
          index: 2
        },
        {
          title: 'title4',
          key: 'title4',
          index: 3
        }
      ]
export default class Transfer extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      targetKeys:[],
      selectedKeys:[]
    }
  }
  handleTransfer = (direction, selectedKeys) =>{
    console.log('父组件',selectedKeys)
      this.setState({
        targetKeys:  selectedKeys
      })
  }
  render(){
    const {targetKeys, selectedKeys} = this.state
    return(
      <HuaTransfer
      dataSource={dataSourceTransfer}
      targetKeys={targetKeys}
      selectedKeys={selectedKeys}
      onChange={this.handleTransfer}
      render={item => item.title}
      titles={['Source', 'Target']}
    />
    )
  }
}