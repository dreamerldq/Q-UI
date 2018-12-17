import React from 'react'
import HuaNotification from '../../Component/HuaNotification'
import HuaMessage from '../../Component/HuaMeassage'
import HuaButton  from '../../Component/HuaButton'

export default class Notification extends React.Component{
  constructor(props){
    super(props)
  }
  notice = (value) => {
    switch(value){
      case 1:
      HuaNotification.open({
        message: 'Notification Title 1',
        description: 'I will never close automatically. I will be close automatically. I will never close automatically.',
        duration: 3
      })
      break;

      case 2:
      HuaNotification.open({
        message: 'Notification Title 2',
        description: 'I will never close automatically. I will be close automatically. I will never close automatically.',
        duration: 3
      })
      break;

      case 3:
      HuaNotification.open({
        message: 'Notification Title 3',
        description: 'I will never close automatically. I will be close automatically. I will never close automatically.',
        duration: 3
      })
      break;

      case 4:
      HuaMessage.success({
        content: '成功'
      })
      break;

      case 5:
      HuaMessage.error({
        content: '失败'
      })
      break;
    }
    
  }
  render(){
    return(
      <React.Fragment>
        <HuaButton onClick={this.notice.bind(this, 1)}>按钮1</HuaButton>
        <HuaButton onClick={this.notice.bind(this, 2)}>按钮2</HuaButton>
        <HuaButton onClick={this.notice.bind(this, 3)}>按钮3</HuaButton>
        <HuaButton onClick={this.notice.bind(this, 4)}>按钮4</HuaButton>
        <HuaButton onClick={this.notice.bind(this, 5)}>按钮5</HuaButton>
      </React.Fragment>
    )
  }
}