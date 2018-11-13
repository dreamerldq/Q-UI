import HuaButton from '../../Component/HuaButton'
import HuaSelect from '../../Component/HuaSelect'
import HuaInputNumber from '../../Component/HuaInputNumber'
import HuaUpload from '../../Component/HuaUpload'
import {Icon} from 'antd'
import HuaDrawer from '../../Component/HuaDrawer'
import React from 'react'
const props = {
  name: 'file',
  accept: 'image/*',
  action: '//jsonplaceholder.typicode.com/posts/',
  headers: {
    authorization: 'authorization-text',
  },
};
class Button extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      curretnInputNumber: 10,
      currentSelect: 'jack',
      dispaly: false
    }
  }

  handleInputNumber = (number) => {
    this.setState({
        curretnInputNumber: number
    })
  }
  handleUploadChange = (file) =>{
    if(file.file.status === 'done'){
      message.success(`${file.file.name}上传成功`)
    }
    if(file.file.status === 'error'){
      message.error(`${file.file.name}上传失败`)
    }
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
        <HuaButton  type="danger">按钮</HuaButton>
        <HuaButton  disabled>按钮</HuaButton>
        <HuaButton>按钮</HuaButton>
        <HuaButton onClick={() =>console.log('button')} type="primary">按钮</HuaButton>
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


              <HuaUpload {...props} 
              onChange={this.handleUploadChange}
              >
                <span><Icon type="upload"/>Click to Upload</span>
              </HuaUpload>


                <HuaDrawer dispaly={this.state.dispaly}>
               抽屉
             </HuaDrawer>
             <HuaButton onClick={this.handleDisplay}>显示</HuaButton>
    </React.Fragment>
    )
  }
}
export default Button