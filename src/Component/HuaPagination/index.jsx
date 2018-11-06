import React from 'react'
import styles from './index.scss'
import {Icon} from 'antd'
import HuaSelect from '../HuaSelect'
export default class HuaPagination extends React.Component{
  constructor(props){
    super(props)
  }
  onPageClick = (page) => {
    this.props.onChange(page)
  }
  handleLeft = (type) => {
    const {current, total, pageSize} = this.props
    if(type === 'left'){
      if(current !==1){
        this.props.onChange(current - 1)
      }
    }
    if(type === 'right'){
      if(current !== Math.ceil(total/pageSize)){
        this.props.onChange(current + 1)
      }
    }
    
  }
  handleChange = (value) =>{
    console.log("Select Value:", value)
    console.log("AAA", this.props)
    this.props.onShowSizeChange(value)
  }

  render(){
    const { current, defaultCurrent,defaultPageSize, total, pageSize } = this.props
    // current 当前页数 total 总数 pageSize 每页条数 
    const pageCount = Array(Math.ceil(total/pageSize)).fill('1')
    return(
      <div className={styles.pagination}>
      <Icon onClick={this.handleLeft.bind(this, 'left')} type="left" theme="outlined" />
        <div className={styles.page_blocks}>
          {
            pageCount.map((item, index) => {
              return <div key={index} onClick={this.onPageClick.bind(this, index + 1)} className={styles.page_block}>{index + 1}</div>
            })
          }
        </div>
        <Icon onClick={this.handleLeft.bind(this, 'right')} type="right" theme="outlined" />
        <span>当前页数{current}</span>
        <span>总数: {total}</span>
        <HuaSelect defaultValue={10} onHandleChange={this.handleChange}>
           <HuaSelect.Option value={10}>10条/页</HuaSelect.Option>
           <HuaSelect.Option value={20}>20条/页</HuaSelect.Option>
        </HuaSelect>
      </div>
    )
  }
}