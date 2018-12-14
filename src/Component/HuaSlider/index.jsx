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
           
        }
    }
    clickThumb =()=>{
        const {now,min,max} = this.state
        const railNode = this.rail
        const offsetLeft = railNode.current.offsetLeft
        const mouseMove = (e) => {
            let moveX = (e.pageX - offsetLeft)/300 * 100;
            if(moveX >= max){
                moveX = max
            }
            if(moveX <= min){
                moveX  = min
            }
            
            this.changeValue(moveX)
        }
        const mouseUp = () => {
            document.removeEventListener('mousemove', mouseMove)
        }
        document.addEventListener('mousemove', mouseMove)
        document.addEventListener('mouseup', mouseUp)
    }
    changeValue = (moveX) => {
        this.props.onChange(Math.round(moveX))
    }
    clickBackground = (e) => {
        const railNode = this.rail
        const offsetLeft = railNode.current.offsetLeft
        const moveX = (e.pageX - offsetLeft)/300 * 100;
        this.changeValue(moveX)
    }
    render(){
        return(
            <div ref={this.rail} className={styles.container}>
                <div onClick={this.clickBackground} style={{width: this.props.value *3}}  className={styles.rail}>

                </div>
                <div onClick={this.clickBackground}  ref={this.background} className={styles.background}></div>
                <div ref={this.thumb}  onMouseDown={this.clickThumb} style={{left: this.props.value *3}} className={styles.thumb}></div>
                <div className={styles.number}>{`number:${this.props.value}`}</div>
            </div>
        )
    }
}
export default HuaSlider