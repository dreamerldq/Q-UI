import React from 'react';
import _ from 'lodash';
import { Icon } from 'antd';
import styles from './index.scss';

export default class HuaTable extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      dataSources: [...this.props.dataSource],
      filterDataSources: [],
      filter:{}
    }
  }
  handleSorter = (key, type) => {
    this.props.onChange({columnKey:key, order:type === 'up'? 'asc' : 'desc'})
  }
  handleFilter = (key) => {
    this.setState({
        filter: {...this.state.filter, [key]: !this.state.filter[key] || false}
    })
  }
  handleFilterItem = (key, dataIndex) => {
    const { filterDataSources } = this.state
    const filterDataSource = filterDataSources.filter((data,index) => {
      return data[dataIndex] === key
    })
    this.setState({
      dataSources: filterDataSource
    })
  }
  componentWillReceiveProps(nextProps){
    this.handleSortOrder(nextProps.columns)
  }
  handleSortOrder = (columns,key) => {
     columns.forEach((column) => {
      const sorted = column.sortOrder
      if(sorted){
        const newDataSource = [...this.props.dataSource.sort(column.sorter)]
        if(sorted === 'desc'){
         this.setState({
           dataSources: newDataSource,
           filterDataSources: newDataSource
         })
        }else{
          this.setState({
            dataSources: [...newDataSource.reverse()],
            filterDataSources: [...newDataSource.reverse()]
          })
        }
      }else{
        const newDataSource = [...this.props.dataSource.sort((a,b) => a.index - b.index)]
        this.setState({
          dataSources: newDataSource,
          filterDataSources: newDataSource
        })
      }
     
    })
  }
  renderTableHeader = () => {
    const {columns, bordered} = this.props
    return columns.map((column, index) => {
        return <th 
                width={column.width}
                className={ bordered ? styles.table_th_solid : styles.table_th}
                key={column.key || index}>
                <span>{column.title}</span>
                {column.sorter
                  ?<React.Fragment>
                    <div className={styles.sorted_button}>
                    <span onClick={this.handleSorter.bind(this,column.dataIndex,'up')}><Icon type="up" theme="outlined" /></span>
                    <span onClick={this.handleSorter.bind(this,column.dataIndex,'down')}><Icon type="down" theme="outlined" /></span>
                    </div>
                  </React.Fragment>
                  :null}
                  {column.filters
                  ?<React.Fragment>
                    <span className={styles.filters} onClick={this.handleFilter.bind(this,column.dataIndex)}>
                      <Icon type="pic-left" theme="outlined" />
                      {this.state.filter[column.dataIndex] &&
                      <div className={styles.filters_item}>
                      {column.filters.map((item) => {
                        return <span onClick={this.handleFilterItem.bind(this, item.text, column.dataIndex)} key={item.text}>{item.text}</span>
                      })}
                    </div>}
                    </span>
                  </React.Fragment>
                  :null}
              </th>
    })
  }
  render() {
    const {
      columns, bordered, local, loading,
    } = this.props;
    const {dataSources} = this.state
    const columnsDataIndex = columns.map(column => column.dataIndex);
    return (
      <div>
      <table className={styles.hua_table}>
      <thead>
          <tr className={styles.table_tr}>
                {this.renderTableHeader()}
          </tr>
        </thead>
       {loading

         ? <tbody>
           <tr>
            <td>
              <div className={styles.loading}>
                加载中.....
              </div>
            </td>
           </tr>
         </tbody>

         : <tbody>
       {
         dataSources.length > 0
           ? dataSources.map((data, index) => (
             <tr className={styles.table_tr} key={index}>
               {
                columnsDataIndex.map((item, index_key) => { // item单个数据源对象的key  index 第几个key
                  const column_idx = _.indexOf(columnsDataIndex, item);
                  if (column_idx !== -1) {
                    const column = columns[column_idx];
                    return (column).render
                      ? <td className={bordered ? styles.table_td_solid : styles.table_td} style={{ width: `${column.width || 50}px` }} key={`${item}_${index_key}`}>{column.render(data[item], data, index)}</td>
                      : <td className={bordered ? styles.table_td_solid : styles.table_td} style={{ width: `${column.width || 50}px` }} key={`${item}_${index_key}`}>{data[item]}</td>;
                  }
                })
               }
             </tr>
           ))
           : <tr><td>{local.emptyText}</td></tr>
       }
     </tbody>}
      </table>

      </div>
    );
  }
}
