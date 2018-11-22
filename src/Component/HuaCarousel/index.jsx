import React from 'react'
import styles from './index.scss'
export default class HuaCarousel extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            left: 0,
            animate: true
        }
    }
    handleCicle = (key) => {
        const childrens = this.enhanceChildren()
        if(key === childrens.length -1 ){
            this.setState({
                left: (key) * (-200)
            }, () => {
                setTimeout(() => {
                    this.setState({
                        animate: false,
                        left: 0
                    }, ()=>{
                        setTimeout(() => {
                            this.setState({
                                animate: true
                            })
                        }, 100);
                    })
                }, 500);
            })
        }
        this.setState({
            left: (key) * (-200)
        })
    }
    enhanceChildren = () => {
        return [...this.props.children, this.props.children[0]]
    }
    // componentDidMount(){
    //     const childrens = this.enhanceChildren()
    //     const {autoplay} = this.props
    //     let key = 0
    //     if(autoplay){
            
    //         setInterval(()=> {
    //             if(key > childrens.length-1){
    //                 key = 0
    //             }
    //             this.handleCicle(key)
    //             key = key + 1
    //         }, 2000)
    //     }
    // }
    render(){
        const childrens = this.enhanceChildren()
        return(
            <div  className={styles.container}>
                <div style={{
                    width: `${childrens.length * 200}px`, 
                    left:`${this.state.left}px`,
                    transition: `${this.state.animate ? 'left 0.5s': 'none'}`
                    }} className={styles.carousel}>
                   {this.enhanceChildren()}
                </div>
                <div  className={styles.cicleGroup}>
                    {childrens.map((child, index) => {
                        return <div onClick={this.handleCicle.bind(this, index)} key={index} className={styles.cicle}></div>
                    })}
                </div>
            </div>
        )
    }
}