import HuaButton from '../../Component/HuaButton'
import HuaSelect from '../../Component/HuaSelect'
import HuaInputNumber from '../../Component/HuaInputNumber'
import React from 'react'
class Button extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      curretnInputNumber: 10,
      currentSelect: 'jack'
    }
  }

  handleInputNumber = (number) => {
    this.setState({
        curretnInputNumber: number
    })
  }
  handleChange = (value) =>{
    console.log("Select Value:", value)
    this.setState({
      currentSelect: value
    })
  }
  render(){
    return(
      <React.Fragment>
        <HuaButton disabled type="danger">按钮</HuaButton>
        <HuaButton onClick={() =>console.log('button')} type="danger">按钮</HuaButton>
         <HuaInputNumber
              autoFoucs
              defaultValue={20}
              max={100}
              min={0}
              step={5}
              value={this.state.curretnInputNumber}
              onChange={this.handleInputNumber}
            />

             <HuaSelect  
              style={{width:'300px'}}
              mode="multiple" 
              value={this.state.currentSelect} 
              defaultValue="lucy" 
              onHandleChange={this.handleChange}>
              <HuaSelect.Option value="jack">Jack</HuaSelect.Option>
              <HuaSelect.Option value="lucy">Lucy</HuaSelect.Option>
              <HuaSelect.Option value="Yiminghe">yiminghe</HuaSelect.Option>
            </HuaSelect>
    </React.Fragment>
    )
  }
}
export default Button