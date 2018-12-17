import React from 'react'
import styles from './index.scss'
import HuaButton from '../HuaButton'
class HuaModal extends React.Component{
    constructor(props){
        super(props)
    }
    okModal = () => {
        this.props.onOk()
    }
    cancelModal = () => {
        this.props.onCancel()
    }
    render(){
        const {okText,cancelText,title, visible} = this.props
        if(visible){
            return(
                <div className={styles.container}>
                    <div className={styles.body}>
                        <div className={styles.header}>
                            {title}
                        </div>
                        <div className={styles.content}>
                            {this.props.children}
                        </div>
                        <div className={styles.footer}>
                            <HuaButton onClick={this.okModal}>{okText? okText: '确定'}</HuaButton>
                            <HuaButton onClick={this.cancelModal}>{cancelText? cancelText: '取消'}</HuaButton>
                        </div>
                    </div>
            </div>
            )
        }else{
            return null
        }
    }
}
export default HuaModal