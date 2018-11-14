import React from "react";
import styles from "./index.scss";
export default class HuaProgress extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { type, percent, style } = this.props;
    const C = 2*Math.PI*47
    if (type === "cicle") {
      return (
        <div className={styles.progress_cicle}>
          <svg  viewBox="0 0 100 100">
            <path
              d="M 50,50 m 0,-47
                a 47 47 0 1 1 0,94
                a 47 47 0 1 1 0 -94"
                // a 47, 47, 0 1 1 0, 94 (x轴半径，y轴半径，x轴旋转角度， 角度大小， 弧线方向， 弧形的终点，弧形的终点)
              stroke="#f3f3f3"
              strokeWidth="6"
              fillOpacity="0"
            />
            <path
              className={styles.cicle_outer}
              d="M 50,50 m 0,-47
                a 47,47 0 1 1 0,94
                a 47,47 0 1 1 0,-94"
              strokeLinecap="round"
              strokeWidth="6"
              fillOpacity="0"                                             //strokeDasharry 第一个值是填充的长度，第二个值是不填充的长度。
               style={{stroke: "rgb(16, 142, 233)", strokeDashoffset:'0px', strokeDasharray: `${C*percent/100}, ${C}`, transition: "strokeDashoffset 0.3s ease 0s, strokeDasharray 0.3s ease 0s"}}
            />
          </svg>
          <div className={styles.cicle_text}>
            {percent}%
          </div>
        </div>
      );
    } else {
      return (
        <div style={style} className={styles.progress_default}>
          <div className={styles.progress_outer}>
            <div
              className={styles.progress_inner}
              style={{ width: `${percent}%`, background: "red" }}
            />
          </div>
          <div className={styles.progress_text}>{percent}%</div>
        </div>
      );
    }
  }
}
