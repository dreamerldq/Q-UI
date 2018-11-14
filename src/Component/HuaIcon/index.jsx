import React from 'react'
import styles from './index.scss'
import classnames from 'classnames'
export default class HuaIcon extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <span><i style={this.props.style} className={classnames(this.props.className, styles.iconContainer)}/></span>
        )
    }
}