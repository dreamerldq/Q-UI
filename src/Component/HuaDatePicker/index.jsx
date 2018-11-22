import React from 'react'
import styles from './index.scss'
const week = ['一', '二','三', '四','五', '六', '日']

export default class HuaDatePicker extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            year: '',
            month: '',
            day: '',
            renderArr:[[]]
        }
    }
    renderPicker = ([year_o,month_o]) => {
        var arr  =[]
        const {year, month, monthLen, whichDay, day} = this.calculate(year_o,month_o)
        const lastMonthLenght = new Date(year,month-1,0).getDate()
        var count = 0;
        var num = 0
        for(var i = 0; i<7; i++){
            const arr1 = []
            for(var j = 0; j<7; j++){
                if(i === 0){
                    arr1[j] = week[j]
                }else{
                    if(j < whichDay -1 && count === 0){
                        arr1[j] = lastMonthLenght - (whichDay - j) +1
                    }else if(count>=monthLen){
                        num = num + 1
                        arr1[j] = num
                    }else{
                        count = count + 1
                        arr1[j] = count
                    }
                }
                
            }
            arr.push(arr1)
        }
        this.setState({
            year,month,day, renderArr: arr
        })
    }
    calculate = (year,month,day) =>{
        var date=year+'/'+month+'/'+'1';
        var whichDay=new Date(date).getDay();
     var message={
           year:year,
           month:month,
           monthLen:new Date(year,month,0).getDate(),
           whichDay:whichDay,
           day:day
     };
     return message;
    }
    componentDidMount(){
        this.renderPicker([2018,11])
    }
    handleDay = (day) => {
        console.log("AAA", day)
        this.setState({
            day
        })
    }
    
    render(){
        const {renderArr, year, month} = this.state
        console.log("AAA", year , month)
        return(
            <div className={styles.container}>
                <table>
                    <thead>
                        <tr className={styles.table_thead_tr}>
                            {renderArr[0].map((cell) => {
                                return <th className={styles.table_th} key={cell}>{cell}</th>
                            })}
                        </tr>
                    </thead>
                    <tbody>
                    {renderArr.slice(1,renderArr.length).map((item,index) => {
                        return(
                            <tr key={index} className={styles.table_tbody_tr}>
                                    {item.map((cell) => {
                                            return <td onClick={this.handleDay.bind(this,cell)} key={cell} className={styles.tbale_td}>{cell}</td>
                                        })}
                                    </tr>
                        )
                    })}
                    </tbody>
                </table>
            </div>
        )
    }
}