import React from 'react'
import styles from './index.scss'
export default class HuaSlider extends React.Component{
  constructor(props){
    super(props)
    this.state={
      clickStatus: false
    }
  }
  mouseDown = (e) =>{
    e.stopPropagation()
    this.setState({
        clickStatus: true
    })
  }
  mouseMove = (e) => {
    e.stopPropagation()
    const {value, max, min} = this.props
    const ratio = max/200
    const showValue = Math.ceil(value * ratio)
    
    if(this.state.clickStatus){
      if(showValue < max &&  showValue>= min){
        this.props.onChange(Math.ceil(e.pageX))
      }
    }
  }
  mouseUp = (e) =>{
    e.stopPropagation() 
    console.log("up")
    this.setState({
      clickStatus: false
  })
  }

  render(){ 
    const {value, max, min} = this.props
    const ratio = max/200
    return(
      <div>
        <div className={styles.slider}>
        <div className={styles.slider_background}>
        <div style={{width: value}} className={styles.slider_fill}>
        <div 
          onMouseDown={this.mouseDown} 
          onMouseUp={this.mouseUp}
          onMouseMove={this.mouseMove}
          
          style={{left: `${(value - 2)}px`}}
          className={styles.slider_block}>
        </div>
        </div>
        </div>
        
        
      </div>
      <div>{Math.ceil(value * ratio)}</div>
      </div>
      
    )
  }
}