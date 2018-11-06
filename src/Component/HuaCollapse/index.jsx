import React from 'react'
import styles from './index.scss'
export default class HuaCollapse extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div className={styles.hua_collapse}>
        {this.props.children.map((child) => {
           return React.cloneElement(
             child,
            { onHandelPanel :this.props.onChange,
              activeKey: this.props.activeKey}
           )
        })}
      </div>
    )
  }
}
class HuaPanel extends React.Component{
  constructor(props){
    super(props)
  }
  handlePanel = (panel) => {
    const {activeKey} = this.props
    if(activeKey){
      this.props.onHandelPanel(null)
    }else{
      this.props.onHandelPanel(panel)
    }
    
  }
  render(){
    const { header, value, activeKey } = this.props
    return(
      <div className={styles.hua_panel}>
        <div onClick={this.handlePanel.bind(this, value)} className={styles.hua_panel_header}>
          {header}
        </div>
        
          <div style={{display:`${activeKey === value ? 'block' : 'none'}`}}  className={styles.hua_panel_body}>
            {this.props.children}
          </div>
        
      </div>
    )
  }
}
HuaCollapse.Panel = HuaPanel