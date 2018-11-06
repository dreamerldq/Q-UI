import React from 'react'
import styles from './index.scss'
import _ from 'lodash'
export default class HuaTable extends React.Component{
  constructor(props){
    super(props)
  
  }
  render(){
    const {columns, dataSource,bordered, local, loading} = this.props
    const columnsDataIndex = columns.map((column) => {
      return column.dataIndex
    })
    return(
      <div>
      <table  className={styles.hua_table}>
      <thead>
          <tr className={styles.table_tr}>
            {columns.map((column, index) => {
              return <th width={column.width} className={ bordered ? styles.table_th_solid :styles.table_th}  key={column.key || index}>{column.title}</th>
            })}
          </tr>
        </thead>
       {loading ? 
      
         <tbody>
           <tr>
            <td>
              <div className={styles.loading}>
                加载中.....
              </div>
            </td>
           </tr>
         </tbody>
        
       :
       <tbody>
       {
         dataSource.length>0 ?
         dataSource.map((data,index) => { // dataSource 数据源组  data单个数据源 
           return(
             <tr className={styles.table_tr} key={index}>
               {
                Object.keys(data).map((item, index_key) => { // item单个数据源对象的key  index 第几个key
                const column_idx =  _.indexOf(columnsDataIndex, item)
                if(column_idx !== -1){
                 const column = columns[column_idx]
                 return (column).render ?
                  <td className={bordered ? styles.table_td_solid: styles.table_td} style={{width: `${column.width || 50}px`}} key={`${item}_${index_key}`}>{column.render(data[item], data, index)}</td> :
                  <td className={bordered ? styles.table_td_solid: styles.table_td} style={{width: `${column.width || 50}px`}} key={`${item}_${index_key}`}>{data[item]}</td>
                }  
                })
               }
             </tr>
           )
         }):
         <tr><td>{local.emptyText}</td></tr>
       }
     </tbody>}
      </table>
       
      </div>
    )
  }
}