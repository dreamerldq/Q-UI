import React from 'react'
import styles from './index.scss'
class HuaSlider extends React.Component{
    constructor(props){
        super(props)
        this.thumb = React.createRef();
        this.rail = React.createRef();
        this.background = React.createRef();
        this.state={
            max:this.props.max,
            min:this.props.min,
            bgWidth: this.props.width || 300,
            radix: 1,
            step: this.props.step || 1,
            tooltip: false
        }
    }
    clickThumb = () =>{
        // 当鼠标点击thumb的时候执行
        this.setState({
            tooltip: true
        })
        const {min, max, radix, step} = this.state
        const railNode = this.rail
        const offsetLeft = railNode.current.offsetLeft
        const mouseMove = (e) => {
            let moveX = (e.pageX - offsetLeft)/radix ;// 用当前的鼠标位置减去当前元素的在页面中的偏移量，就是元素移动的初始位置。
            moveX = Math.round(moveX / step) * step 
            if(moveX >= max){
                moveX = max
            }
            if(moveX <= min){
                moveX  = min
            }
           
            
            this.changeValue(moveX)
        }
        const mouseUp = () => {
            this.setState({
                tooltip: false
            })
            document.removeEventListener('mousemove', mouseMove) // 当鼠标移动的时候执行
        }
        document.addEventListener('mousemove', mouseMove)
        document.addEventListener('mouseup', mouseUp) // 当鼠标抬起后，移除鼠标移动的监听事件
    }
    changeValue = (moveX) => {
        this.props.onChange(Math.round(moveX))
    }
    clickBackground = (e) => {
        const {radix} = this.state
        const railNode = this.rail
        const offsetLeft = railNode.current.offsetLeft
        const moveX = (e.pageX - offsetLeft)/radix;
        this.changeValue(moveX)
    }
    componentDidMount = () => {
        const {bgWidth, max ,min} = this.state
        const radix = bgWidth / (max -min) // 计算出元素和最大值最小值之差的比例，来控制数值的展示和元素left
        this.setState({
            radix
        })
        
    }
    render(){
        const {bgWidth,radix, tooltip} = this.state
        return(
            <div ref={this.rail} className={styles.container}>
                <div onClick={this.clickBackground} style={{width: this.props.value *radix}}  className={styles.rail}></div>
                <div onClick={this.clickBackground} style={{width:`${bgWidth}px`}}  ref={this.background} className={styles.background}></div>
                <div 
                    ref={this.thumb}  
                    onMouseDown={this.clickThumb}
                   
                    style={{left: this.props.value *radix}} 
                    className={styles.thumb}>
                    <div style={{display: tooltip? 'block' : 'none'}} className={styles.tooltip}>
                            {this.props.value}
                    </div>
                </div>
                {/* <div style={{left:`${bgWidth + 10}px`}} className={styles.number}>
                    {`number:${this.props.value}`}
                </div> */}
            </div>
        )
    }
}
export default HuaSlider