import React from 'react'
import styles from './index.scss'
import { Icon } from 'antd'
let timer;
export default class HuaCarousel extends React.Component{
    constructor(props){
        super(props)
        this.container = React.createRef()
        this.state = {
            left: 0,
            currentKey: 1,
            clientWidth: 300,
            carouselWidth: 300,
            carouselLength: 0,
            animateDuration: ''
        }
    }
    handleCicle = (key) => {
        const { clientWidth } = this.state
        this.setState({
            left: - (key * clientWidth),
            currentKey: key
        })
    }
    handelArrow = (type) => {
        const { clientWidth, currentKey, carouselLength } = this.state;
        let left, key;
        if(type === 'right'){
            key = currentKey + 1
            left = this.state.left - clientWidth
                this.setState({
                    currentKey: key,
                    left
                },() => {
                    if(key > carouselLength){
                        this.maxTransfer('right')
                    }
                   
                })
    }else{
        key = currentKey - 1
        left = this.state.left + clientWidth
        this.setState({
            currentKey: key,
            left
        },() => {
            if(key < 1){
                this.maxTransfer('left')
            }
        })
}
}
   maxTransfer = (type) => {
       let left, currentKey;
       const { clientWidth, carouselLength} = this.state
       if(type === 'right'){
           left = -clientWidth
           currentKey = 1
       }else{
           left = -clientWidth * carouselLength
           currentKey = carouselLength
       }
    setTimeout(() => {
        this.setState({
            animateDuration: '',
            left,
            currentKey
        }, () => {
            setTimeout(() => {
                this.setState({
                    animateDuration: '0.5s'
                })
            }, 100);
        })
    }, 400);
   }
   handelMouseLeave = () => {
    timer = setInterval(() => {
        this.handelArrow('right')
    }, 2000)
   }
   handleMouseEnter = () => {
        clearInterval(timer)
   }
    componentDidMount(){
        const {autoplay} = this.props
       
        const { clientWidth } = this.container.current
        this.setState({
            clientWidth,
            carouselWidth: clientWidth * this.props.children.length,
            carouselLength: this.props.children.length,
            left: -clientWidth,
            animateDuration: '0.5s'
        })
        if(autoplay){
            timer = setInterval(() => {
                this.handelArrow('right')
            }, 2000)
        }
    }
    enhanceChildren = () => {
       const childrens = [
           this.props.children[this.props.children.length -1 ],
           ...this.props.children,
           this.props.children[0]
        ]
       return childrens.map((child, index) => {
            return React.cloneElement(
                child,
                {
                    style:{width:'100%'},
                    key:index,
                    onMouseEnter: this.handleMouseEnter,
                    onMouseLeave: this.handelMouseLeave
                }
            )
        })
    }
    render(){
        const { clientWidth,currentKey } = this.state;
        const childrens = this.enhanceChildren()
        return(
            <div ref={this.container} className={styles.container}>
                <div 
                    className={styles.carousel}
                        style={{
                        width: `${childrens.length * clientWidth}px`, 
                        left:`${this.state.left}px`,
                        transitionDuration: `${this.state.animateDuration}`
                        }}>
                   {childrens}
                </div>
                <div  className={styles.cicleGroup}>
                    {this.props.children.map((child, index) => {
                        return <div onClick={this.handleCicle.bind(this, index+1)} key={index} className={styles.cicle}></div>
                    })}
                </div>

                <div onClick={this.handelArrow.bind(this,'left')} className={styles.leftArrow}>
                    <Icon type="left" />
                </div>
                <div onClick={this.handelArrow.bind(this,'right')} className={styles.rightArrow}>
                    <Icon type="right" />
                </div>
            </div>
        )
    }
}