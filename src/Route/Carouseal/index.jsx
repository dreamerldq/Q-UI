import HuaCarousel from '../../Component/HuaCarousel'
import React from 'react'
import styles from './index.scss'
export default class Carouseal extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <HuaCarousel autoplay>
                <div style={{background:'red'}} className={styles.container}><h3>1</h3></div>
                <div style={{background:'blue'}} className={styles.container}><h3>2</h3></div>
                <div style={{background:'orange'}} className={styles.container}><h3>3</h3></div>
                <div style={{background:'pink'}} className={styles.container}><h3>4</h3></div>
            </HuaCarousel>
        )
    }
}