import React from 'react'
const HOCForm = (Component) => {
    return class HOCHuaForm extends React.Component{
        constructor(props){
            super(props)
            this.state = {
                form:{
                    getFieldDecorator: this.getFieldDecorator,
                    validateFields: this.validateFields
                },
                values:{

                }
            }
        }
        validateFields = (callback) => {
            callback(this.state.values)
        }
        getFieldDecorator = (key,obj) => {
            return (element) => {
                const input = React.cloneElement(
                    element,
                    {
                        onChange: (e) => {
                            this.setState({
                                values: {...this.state.values, [key]: e.target.value}
                            })
                        }
                    }
                )
                return input
            }
        }
        render(){
            return(
                <Component {...this.props} form={this.state.form}></Component>
            )
        }
    }
}
export default HOCForm