import React from "react";
import styles from "./index.scss";
import { Input,Button, Icon } from "antd";
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
          //   validateStatus={userNameError ? "error" : ""}
          //   help={userNameError || ""}
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
          //   validateStatus={userNameError ? "error" : ""}
          //   help={userNameError || ""}
          >
            {getFieldDecorator("password", {
              
            })(
              <HuaInput
                placeholder="Username"
                type='password'
              />
            )}
          </FormItem>
          <Button onClick={this.handleForm}>提交</Button>
        </HuaForm>
      </div>
    );
  }
}
export default HOCForm(Form);
