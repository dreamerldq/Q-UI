import React from "react";
import styles from "./index.scss";
import { Icon } from "antd";
export default class HuaDrawer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { dispaly, title } = this.props;
    console.log("AAA", title);
    if(dispaly){
      return (
        <div className={styles.mask}>
          <div
            style={{ left: `${dispaly ? "0" : "-500"}px` }}
            className={styles.hua_drawer}
          >
            <div className={styles.title}>{title}</div>
            <span onClick={this.props.onClose} className={styles.close}>
              <Icon type="close" />
            </span>
            <div className={styles.content}>{this.props.children}</div>
          </div>
        </div>
      );
    }else{
      return null
    }
    
  }
}
