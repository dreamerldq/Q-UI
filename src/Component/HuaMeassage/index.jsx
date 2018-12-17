import React from 'react';
import ReactDOM from 'react-dom'
import styles from './index.scss'
import {Icon} from 'antd'
import { duration } from 'moment';
let body = null;
const topBody = document.querySelector('body');
const message = { // message是一个对外的接口对象
  children: [],
  count: 0,
  success({content,duration}){
    this.createMessage('success', content,duration)
  },
  error({content}){
    this.createMessage('error', conten,durationt)
  },
  info({content}){
    this.createMessage('info', content,duration)
  },
  createMessage(type,content,duration){
    const Message = React.createElement( // 将传递的参数，以props的方式传递给通知组件
      Messages,
      {
        content,
        type
      },
    );
    const childLen = this.children.length;
    if (childLen === 0) { // 当调用时，如果当前通知队列为空，则在root dom下创建通知元素
      body = document.createElement('div');
      body.id = 'message';
      topBody.appendChild(body);
      body.style.cssText = 'width: 100vw;display: flex;flex-direction:column;align-items: center;position: fixed;top: 20px;'
      // body.className = 'message'
    }
    this.count += 1;
    const node = document.createElement('div'); // 创建一个盒子，用来渲染通知组件
    node.id = `message${this.count}`; // 给这个盒子标记id
    body.appendChild(node); // 添加在通知列表中
    this.children.push(Message);
    setTimeout(() => {
      body.removeChild(node);
      this.children.pop();
      const length = this.children.length;
      if (length === 0) {
        topBody.removeChild(body);
      }
    },(duration || 4.5) * 1000);
    ReactDOM.render(Message, document.getElementById(`message${this.count}`)); // 将React组件渲染在dom中
  }
};
const Messages = ({  content, type }) => {
  let MyIcon = null
  switch(type){
    case 'success' :
    MyIcon = () => <Icon type="check-circle" theme="twoTone" twoToneColor="#52c41a" />
    break;
    case 'error':
   MyIcon = () => <Icon type="close-circle"  theme="twoTone" twoToneColor="red"/>
    break;
    case 'info':
    MyIcon = () =><Icon type="exclamation-circle" theme="twoTone" twoToneColor="yellow"  />
    break;
  }

  return(
    <div className={styles.container}>
        {MyIcon()}
        <div className={styles.des}>{content}</div>
    </div>
  )

}; // 创建全局通知组件



export default message;
