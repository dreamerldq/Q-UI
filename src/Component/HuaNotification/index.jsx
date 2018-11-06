import React from 'react'
import styles from './index.scss'
import ReactDOM from 'react-dom'

const body = document.getElementById('notification')
body.style.height= '100vh'
body.style.width = '500px'
body.style.display='flex'
body.style.flexDirection = 'column'
body.style.alignItems = 'center'
body.style.position='fixed'
// body.style.background = 'red'
body.style.right = 0
body.style.top = 0
const notification = {
  children: [],
  count: 0,
  open({message, description, duration}){
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
    }, duration * 1000);

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