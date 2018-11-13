import HuaProgress from '../../Component/HuaProgress'
import React from 'react'
import HuaButton from '../../Component/HuaButton'
export default class Progress extends React.Component{
  constructor(props){
    super(props)
    this.state={
      percent: 50
    }
  
  }
  handleProggress = (type) => {
    if(type === 'add'){
      this.setState({
        percent: this.state.percent + 10
      })
    }else{
      this.setState({
        percent: this.state.percent -10
      })
    }
  }
  render(){
    return(
      <React.Fragment>
        <HuaProgress style={{width: '400px'}} percent={this.state.percent}></HuaProgress>
        
        <HuaProgress type="cicle"  percent={this.state.percent}></HuaProgress>
        <HuaButton onClick={this.handleProggress.bind(this,'add')}>+</HuaButton>
        <HuaButton onClick={this.handleProggress.bind(this,'sub')}>-</HuaButton>
      </React.Fragment>
    )
  }
}