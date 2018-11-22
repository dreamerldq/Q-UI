function calculate(year,month,day){
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
var rili = Array(7).fill([])
var arr  =[]
const week = ['一', '二','三', '四','五', '六', '日']
const {year, month, monthLen, whichDay, day} = calculate(2018,11,20)
const lastMonthLenght = new Date(2018,10,0).getDate()
var count = 0;
var num = 0
for(var i = 0; i<7; i++){
    const arr1 = []
    for(var j = 0; j<7; j++){
        if(i ===0){
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