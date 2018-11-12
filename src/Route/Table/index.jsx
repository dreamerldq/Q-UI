import React from 'react'
import HuaTable from '../../Component/HuaTable'
import HuaPagination from '../../Component/HuaPagination'
const dataSource = [{
  key: '1',
  name: '胡彦斌',
  age: 32,
  address: '西湖区湖底公园1号',
  company: '心跳时空'
}, {
  key: '2',
  name: '易烊千玺',
  age: 42,
  address: '西湖区湖底公园1号',
  company: '心跳时空'
},
{
  key: '3',
  name: '吴亦凡',
  age: 20,
  address: '西湖区湖底公园1号',
  company: '佳格新天地'
}];

const columns = (sortedInfo) =>  [
  {
    title: '序号',
    dataIndex: 'key',
    key: 'key',
    render: (text, record, index) => {
      
      return(
        <span>
        {text}
      </span>
      )
    },
    width: 100
  },
  {
  title: '姓名',
  dataIndex: 'name',
  key: 'name',
  render: (text, record, index) => {
    return(
      <span style={{color:'red'}}>
      {text}
    </span>
    )
  },
  sorter: (a,b) => a.name.length - b.name.length,
  sortOrder: sortedInfo.columnKey === 'name' && sortedInfo.order,
  width: 100
},
 {
  title: '年龄',
  dataIndex: 'age',
  key: 'age',
  width: 100,
  sorter: (a,b) => a.age - b.age,
  sortOrder: sortedInfo.columnKey === 'age' && sortedInfo.order,
},
{
  title: '公司',
  dataIndex: 'company',
  key: 'company',
  width:200,
  filters: [
    { text: '心跳时空', value: 'xintiao' },
    { text: '佳格新天地', value: 'jiage' },
  ]
},
 {
  title: '住址',
  dataIndex: 'address',
  key: 'address',
  width: 150
},
];
export default class Table extends React.Component{
  constructor(props){
    super(props)
      this.state={
        sortedInfo: {},
        current: 1,
        pageSize: 10,
      }
    }
  handleTableChange = (sorter) => {
    console.log('Various parameters',sorter);
    this.setState({
      sortedInfo: sorter,
    });
  }

  handleCurrentPage = (page) =>{
   
    this.setState({
      current: page
    })
  }
  
  handleSizeChange = (pageSize) => {
   
    this.setState({
      pageSize: pageSize
    })
  }
  render(){
    const { pageSize, current } = this.state
    return(
      <React.Fragment>
        <HuaTable
              dataSource={dataSource}
              columns={columns(this.state.sortedInfo)}
              bordered
              onChange={this.handleTableChange}
              local={{
                emptyText: '暂无数据'
              }}
              />
          
          <HuaPagination
            onChange={this.handleCurrentPage}
            onShowSizeChange={this.handleSizeChange}
            total={40}
            pageSize={pageSize}
            current={current}
          
          />
      </React.Fragment>
    )
  }
}