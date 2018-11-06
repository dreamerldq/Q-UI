import React from 'react'
import styles from './index.scss'
export default class HuaTabs extends React.Component{
  constructor(props){
    super(props)
    
  }
  handleTabs = (tab) => {
   
    this.props.onChange(tab)
  }
  getTabsHeader = () => {
    const {activeKey} = this.props
    return this.props.children.map((child, index) => {
      return <div key={index} onClick={this.handleTabs.bind(this,child.key)} className={ parseInt(activeKey,10)==index + 1 ? styles.tabs_header_block_active : styles.tabs_header_block}>{child.props.tab}</div>
    })
  }
  render(){
    const {length} = this.props.children
    const {activeKey} = this.props
    return(
      <div>
        <div className={styles.tabs_header}>
            {this.getTabsHeader()}
        </div>
         <div className={styles.tabs}>
          <div style={{width: `${length * 500}px`, left:`${-500 * (activeKey - 1)}px`}} className={styles.tabs_group}>
          {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}
const TabsItem = (props) =>{
  return(
    <div className={styles.tabs_item}>
      {props.children}
    </div>
  )
}
HuaTabs.Item = TabsItem