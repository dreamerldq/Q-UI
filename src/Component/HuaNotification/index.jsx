import React from 'react'
import styles from './index.scss'
import ReactDOM from 'react-dom'

let body = null
const topBody = document.querySelector('body')
const notification = { // notification是一个对外的接口对象
  children: [],
  count: 0,
  open({message, description, duration}){
    const childLen = this.children.length
    if(childLen === 0){ // 当调用时，如果当前通知队列为空，则在root dom下创建通知元素
      body = document.createElement('div')
      body.id = 'notification'
      topBody.appendChild(body)
      body.style.height= '100vh'
      body.style.width = '500px'
      body.style.display='flex'
      body.style.flexDirection = 'column'
      body.style.alignItems = 'center'
      body.style.position='fixed'
      body.style.right = 0
      body.style.top = 0
    }
    this.count += 1
    const Notifcation = React.createElement( // 将传递的参数，以props的方式传递给通知组件
      Notifcations,
      {
        message,
        description
      }
    )
    const node = document.createElement('div') // 创建一个盒子，用来渲染通知组件
    node.id=`notice${this.count}` // 给这个盒子标记id
    body.appendChild(node) // 添加在通知列表中
    this.children.push(Notifcation)
    setTimeout(() => {
      body.removeChild(node)
      this.children.pop()
      const length = this.children.length
      if(length === 0){
        topBody.removeChild(body)
      }
    }, (duration || 4.5) * 1000);
  ReactDOM.render(Notifcation, document.getElementById(`notice${this.count}`)); // 将React组件渲染在dom中
  }
}
const Notifcations = ({message, description}) => { // 创建全局通知组件
  return(
    <div className={styles.container}>
        <div className={styles.title}>{message}</div>
        <div className={styles.des}>{description}</div>
    </div>
  )
}



export default notification