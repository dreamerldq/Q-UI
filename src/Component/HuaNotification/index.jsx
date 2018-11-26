import React from 'react'
import styles from './index.scss'
import ReactDOM from 'react-dom'

let body = null
const topBody = document.querySelector('body')
const notification = {
  children: [],
  count: 0,
  open({message, description, duration}){
    const childLen = this.children.length
    if(childLen === 0){
      // body = document('notification')
     
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
    const Notifcation = React.createElement(
      Notifcations,
      {
        message,
        description
      }
    )
    const node = document.createElement('div')
    node.id=`notice${this.count}`
    body.appendChild(node)
    this.children.push(Notifcation)
    setTimeout(() => {
      body.removeChild(node)
      this.children.pop()
      const length = this.children.length
      if(length === 0){
        topBody.removeChild(body)
      }
    }, (duration || 4.5) * 1000);
  ReactDOM.render(Notifcation, document.getElementById(`notice${this.count}`));
  }
}
const Notifcations = ({message, description}) => {
  return(
    <div className={styles.container}>
        <div className={styles.title}>{message}</div>
        <div className={styles.des}>{description}</div>
    </div>
  )
}



export default notification