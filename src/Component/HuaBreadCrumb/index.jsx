import React from 'react'
import styles from './index.scss'

class HuaBreadCrumb extends React.Component{
  constructor(props){
    super(props)
  }
  enahnceChildren = () => {
    return this.props.children.map((child,index)=>{
      return React.cloneElement((child),{
        count: this.props.children.length,
        index: index+1,
        separator: this.props.separator
      })
    })
  }
  render(){
    return(
      <div className={styles.breadcrumb}>
        {this.enahnceChildren()}
      </div>
    )
  }
}
const Item = (props) => {
  
  return(
    <li key={props.index} className={styles.breadcrumb_item}>
      {props.children}{props.count !== props.index && <span style={{margin: '0 5px'}}>{props.separator || '/'}</span>}
    </li>
  )
}
HuaBreadCrumb.Item = Item
export default HuaBreadCrumb