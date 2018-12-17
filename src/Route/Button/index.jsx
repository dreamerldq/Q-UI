import HuaButton from "../../Component/HuaButton";
import HuaSelect from "../../Component/HuaSelect";
import HuaInputNumber from "../../Component/HuaInputNumber";
import HuaUpload from "../../Component/HuaUpload";
import HuaCheckbox from "../../Component/HuaCheckbox";
import HuaSlider from '../../Component/HuaSlider/index';
import HuaRadio from "../../Component/HuaRadio";
const { CheckboxGroup } = HuaCheckbox;
import { Icon } from "antd";
import HuaDrawer from "../../Component/HuaDrawer";
import HuaModal from '../../Component/HuaModal'
import React from "react";
const props = {
  name: "file",
  accept: "image/*",
  action: "//jsonplaceholder.typicode.com/posts/",
  headers: {
    authorization: "authorization-text"
  }
};
class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      curretnInputNumber: 10,
      currentSelect: "jack",
      dispaly: false,
      checkboxValues: ["Apple"],
      singleCheck: false,
      currentRadio: 4,
      dispaly: false,
      sliderValue: 0,
      modalVisible: false
    };
  }

  handleInputNumber = number => {
    this.setState({
      curretnInputNumber: number
    });
  };
  handelCheck = (value, key) => {
    this.setState({
      singleCheck: value
    });
  };
  handleUploadChange = file => {
    if (file.file.status === "done") {
      message.success(`${file.file.name}上传成功`);
    }
    if (file.file.status === "error") {
      message.error(`${file.file.name}上传失败`);
    }
  };
  handleCloseDrawer = () => {
    this.setState({
      dispaly: false
    })
  }
  radioGroupChange = value => {
    this.setState({
      currentRadio: value
    });
  };
  handleChange = value => {
    console.log("Select Value:", value);
    this.setState({
      currentSelect: value
    });
  };

  handleCheckbox = (value, key) => {
    if (value) {
      this.setState({
        checkboxValues: [...this.state.checkboxValues, key]
      });
    } else {
      const checkboxValues = this.state.checkboxValues.filter(item => {
        return item !== key;
      });
      this.setState({
        checkboxValues
      });
    }
  };
  showModal = () => {
    this.setState({
      modalVisible: true
    })
  }
  cancelModal = () => {
    this.setState({
      modalVisible: false
    })
  }
  okModal = () => {
    this.setState({
      modalVisible:false
    })
  }
  handleDisplay = () => {
    this.setState({
      dispaly: !this.state.dispaly
    });
  };
  handleSlider = (value) => {
      this.setState({
        sliderValue: value
      })
  }
  render() {
    return (
      <React.Fragment>
        {/* <HuaButton type="danger">按钮</HuaButton>
        <HuaButton disabled>按钮</HuaButton>
        <HuaButton>按钮</HuaButton>
        <HuaButton onClick={() => console.log("button")} type="primary">
          按钮
        </HuaButton>
        <HuaInputNumber
          autoFoucs
          defaultValue={20}
          max={100}
          min={0}
          step={5}
          value={this.state.curretnInputNumber}
          onChange={this.handleInputNumber}
        />

        <HuaSelect
          style={{ width: "300px" }}
          mode="multiple"
          value={this.state.currentSelect}
          defaultValue="lucy"
          onHandleChange={this.handleChange}
        >
          <HuaSelect.Option value="jack">Jack</HuaSelect.Option>
          <HuaSelect.Option value="lucy">Lucy</HuaSelect.Option>
          <HuaSelect.Option value="Yiminghe">yiminghe</HuaSelect.Option>
        </HuaSelect>

        <HuaUpload {...props} onChange={this.handleUploadChange}>
          <span>
            <Icon type="upload" />
            Click to Upload
          </span>
        </HuaUpload>

        <HuaDrawer 
          dispaly={this.state.dispaly} 
          title={"Basic Drawer"}
          onClose={this.handleCloseDrawer}
          >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </HuaDrawer>
        <HuaButton onClick={this.handleDisplay}>打开抽屉</HuaButton>
        <div>
          <CheckboxGroup
            options={[
              { label: "Apple", value: "Apple" },
              { label: "Pear", value: "Pear" },
              { label: "Orange", value: "Orange" }
            ]}
            defaultValue={this.state.checkboxValues}
            onChange={this.handleCheckbox}
          />
        </div>
        <span>
          复选框
          <HuaCheckbox
            onChange={this.handelCheck}
            checkeds={this.state.singleCheck}
          >
            单选
          </HuaCheckbox>
        </span>
        <HuaRadio>Radio</HuaRadio>
        <HuaRadio.RadioGroup
          value={this.state.currentRadio}
          onChange={this.radioGroupChange}
        >
          <HuaRadio value={1}>Radio</HuaRadio>
          <HuaRadio value={2}>Radio2</HuaRadio>
          <HuaRadio value={3}>Radio3</HuaRadio>
          <HuaRadio value={4}>Radio4</HuaRadio>
        </HuaRadio.RadioGroup> */}
        <HuaSlider 
          max={100} 
          min={0} 
          value={this.state.sliderValue} 
          onChange={this.handleSlider}
          step={5}
          ></HuaSlider>

          <HuaButton 
            onClick={this.showModal}
          >
          显示modal
          </HuaButton>
          <HuaModal
            visible={this.state.modalVisible}
            title='Modal'
            onCancel={this.cancelModal}
            onOk={this.okModal}
          >
           <p>Some contents...</p>
           <p>Some contents...</p>
           <p>Some contents...</p>
          </HuaModal>
      </React.Fragment>
    );
  }
}
export default Button;
