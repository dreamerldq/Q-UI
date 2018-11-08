import React from 'react'
import styles from './index.scss'
import { Radio } from 'antd';
export default class HuaUpload extends React.Component{
  constructor(props){
    super(props)
    this.state={
      show: false,
      fileName: ''
    }
  }
  handleChange = (e) =>{
    const file = e.target.files[0]
  
    this.uploadFile(file)
    .finally((res)=>{
      this.setState({
        show: true
      })
    })
   
    // 预览图片
    // var reader = new FileReader();
    // reader.onload = function(event) {
    //   var eImg = document.createElement('img');
    //   eImg.src = event.target.result;
    //   document.body.appendChild(eImg);
    // }
    // reader.readAsDataURL(e.target.files[0]);
  }
  uploadFile = (file) => {
    this.setState({
      fileName: file.name
    })
    return new Promise((resolve, reject) => {
      this.props.onChange({file: {status: 'uploading', name: file.name}})
      var request = new XMLHttpRequest();
      var formData = new FormData();
      formData.append(this.props.name, file);
      request.open('POST', this.props.action);
      request.send(formData);
      request.onload = (res) => {
        this.props.onChange({file: {status: 'done', response: res,name: file.name}})
        resolve()
      }
      request.onerror = (res) =>{
        this.props.onChange({file: {status: 'error',response: res,name: file.name}})
        reject()
      }
    })
  }
  render(){
    const {name, action,headers, onChange} = this.props
    return(
      <React.Fragment>
        <label htmlFor="fileX">{this.props.children}</label>
        {
          this.state.show ?
          <div>{this.state.fileName}</div>:
          null
        }
        <div className={styles.hua_upload}>
        <input
        id="fileX"
        onChange={this.handleChange}
        className={styles.hua_upload_input}
        type="file"
        accept="image/*"
        />
      </div>

      </React.Fragment>
     
      
    )
  }
}