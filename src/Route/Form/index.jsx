import React from "react";
import styles from "./index.scss";
import HuaButton from '../../Component/HuaButton'
import HOCForm from "../../Component/HuaForm/hoc";
import HuaForm from "../../Component/HuaForm";
import HuaInput from '../../Component/HuaInput'
const { FormItem } = HuaForm;
class Form extends React.Component {
  constructor(props) {
    super(props);
  }
  handleForm = (e) => {
    e.preventDefault();
    this.props.form.validateFields((values) => {
        console.log("AAA", values)
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <HuaForm>
          <FormItem
         
          >
            {getFieldDecorator("username", {
              rules: [
                { required: true, message: "Please input your username!" }
              ]
            })(
              <HuaInput
                placeholder="Username"
              />
            )}
          </FormItem>
          <FormItem
          
          >
            {getFieldDecorator("password", {
              
            })(
              <HuaInput
                placeholder="Username"
                type='password'
              />
            )}
          </FormItem>
          <HuaButton onClick={this.handleForm}>提交</HuaButton>
        </HuaForm>
      </div>
    );
  }
}
export default HOCForm(Form);
