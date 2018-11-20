import React from 'react'
import styles from './index.scss'
export default class HuaRdio extends React.Component{
    constructor(props){
        super(props)
    }
    onChange = (value) => {
        this.props.onRadioChange(value)
    }
    render(){
        const checked = this.props.currentValue === this.props.value
        return(
            <div className={styles.container}>
                <label htmlFor={this.props.children}>
                    <div className={styles.radioLabel}>
                        {checked ? <div className={styles.checkedRadio}></div> :
                        null}
                    </div>
                </label>
                {this.props.currentValue ?
                    <input className={styles.radio} onChange={this.onChange.bind(this, this.props.value)} id={this.props.children} type='radio' checked={checked }/> :
                    <input className={styles.radio}  type='radio' />}
                
                <span>{this.props.children}</span>
            </div>
        )
    }
}
class RadioGroup extends React.Component{
    constructor(props){
        super(props)
    }
    enhanceChidren = () => {
        return this.props.children.map((child) => {
           return  React.cloneElement(child,
            {
                onRadioChange: this.props.onChange,
                currentValue: this.props.value,
                key: `radio-${child.props.value}`
            })
        })
    }
    render(){
        return(
           <React.Fragment>
               {this.enhanceChidren()}
           </React.Fragment>
        )
    }
}
HuaRdio.RadioGroup = RadioGroup