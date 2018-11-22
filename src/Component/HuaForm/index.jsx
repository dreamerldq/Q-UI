import React from 'react'
import styles from './index.scss'
 class HuaForm extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const {} = this.props
        return(
            <div className={styles.formContainer}>
                {this.props.children}
            </div>
        )
    }
}
class FormItem extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                {this.props.children}
            </div>
        )
    }
}
HuaForm.FormItem = FormItem
export default HuaForm
