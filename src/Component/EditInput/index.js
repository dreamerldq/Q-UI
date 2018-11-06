import React from 'react'
import styles from './index.scss'
import {Input, Icon}  from 'antd'
class EditInput extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      show: false,
      inputValue: ''
    }
  }
  showHandle = () =>{
    this.setState({
      show: true
    })
  }
  hideHandle = () => {
    this.setState({
      show: false
    })
  }
  check = ()=>{
    const {inputValue} =this.props
    this.props.check(inputValue)
  }
  close = () => {
    this.inputEle.blur()
    this.setState({
      inputValue: ''
    })
  }
  changeInput = (e) =>{
    this.setState({
      inputValue: e.target.value
    })
  }
  render(){
    const {show} = this.state
    return(
     <div className={style.input_block}>
        <Input ref={(value)=>this.inputEle = value} onInput={this.changeInput} onBlur={this.hideHandle} onFocus={this.showHandle}/>
        {
          show ?
          <div className={styles.handle_group}>
          <span onClick={this.check}><Icon type="check" theme="outlined" /></span>
          <span onClick={this.close}><Icon type="close" theme="outlined" /></span>
        </div>
        :null
        }
     </div>
    )
  }
}
export default EditInput