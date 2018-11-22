import React from "react";
import styles from "./index.scss";
import { Icon } from "antd";
const week = ["一", "二", "三", "四", "五", "六", "日"];

export default class HuaDatePicker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      year: "",
      month: "",
      day: "",
      renderArr: [[]],
      currentDate: this.getYearMonth()
    };
  }
  getYearMonth = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    const day = currentDate.getDate();
    return [year, month, day];
  };
  handleDate = type => {
    const { currentDate } = this.state;
    let year = currentDate[0],
      month = currentDate[1],
      day = currentDate[2];
    switch (type) {
      case "subyear":
        year = currentDate[0] - 1;
        break;
      case "submonth":
        if (month <= 1) {
          month = 12;
          year = year - 1;
        } else {
          month = currentDate[1] - 1;
        }
        break;
      case "addmonth":
        if (month >= 12) {
          month = 1;
          year = year + 1;
        } else {
          month = currentDate[1] + 1;
        }
        break;
      case "addyear":
        year = currentDate[0] + 1;
        break;
    }
    this.renderPicker([year, month, day]);
    this.setState({
      currentDate: [year, month, day]
    });
  };
  renderPicker = ([year_o, month_o, o_day]) => {
    var arr = [];
    const { year, month, monthLen, whichDay, day } = this.calculate(
      year_o,
      month_o,
      o_day
    );
    const lastMonthLenght = new Date(year, month - 1, 0).getDate();
    var count = 0;
    var num = 0;
    for (var i = 0; i < 7; i++) {
      const arr1 = [];
      for (var j = 0; j < 7; j++) {
        if (i === 0) {
          arr1[j] = week[j];
        } else {
          if (j < whichDay - 1 && count === 0) {
            const num = lastMonthLenght - (whichDay - j) + 1;
            arr1[j] = { type: "pre", day: num, key: `pre${num}` };
          } else if (count >= monthLen) {
            num = num + 1;

            arr1[j] = { type: "last", day: num, key: `last${num}` };
          } else {
            count = count + 1;
            arr1[j] = { type: "yes", day: count, key: `yes${count}` };
          }
        }
      }
      arr.push(arr1);
    }
    this.setState({
      year,
      month,
      day,
      renderArr: arr
    });
  };
  calculate = (year, month, day) => {
    var date = year + "/" + month + "/" + "1";
    var whichDay = new Date(date).getDay();
    var message = {
      year: year,
      month: month,
      monthLen: new Date(year, month, 0).getDate(),
      whichDay: whichDay,
      day: day
    };
    return message;
  };
  componentDidMount() {
    this.renderPicker(this.state.currentDate);
  }
  handleDay = day => {
    console.log("AAA", day);
    const [year, month] = this.state.currentDate;
    this.setState({
      currentDate: [year, month, day]
    });
  };
  renderTdCell = cell => {
    const day = this.state.currentDate[2];
    if (day === cell.day) {
      if (cell.type === "yes") {
        return (
          <td
            onClick={this.handleDay.bind(this, cell.day)}
            key={cell.key}
            style={{ background: "#1890ff" }}
            className={styles.tbale_td}
          >
            {cell.day}
          </td>
        );
      } else {
        return (
          <td
            onClick={this.handleDay.bind(this, cell.day)}
            key={cell.key}
            style={{ background: "black" }}
            className={styles.tbale_td}
          >
            {cell.day}
          </td>
        );
      }
    } else {
      return (
        <td
          onClick={this.handleDay.bind(this, cell.day)}
          key={cell.key}
          className={styles.tbale_td}
        >
          {cell.day}
        </td>
      );
    }
  };

  render() {
    const { renderArr } = this.state;
    console.log("AAA", renderArr);
    const day = this.state.currentDate[2];
    return (
      <div className={styles.container}>
        <div className={styles.table}>
          <div className={styles.functions}>
            <Icon
              onClick={this.handleDate.bind(this, "subyear")}
              type="double-left"
            />
            <Icon
              onClick={this.handleDate.bind(this, "submonth")}
              type="left"
            />
            <span>{this.state.currentDate.join("-")}</span>
            <Icon
              onClick={this.handleDate.bind(this, "addmonth")}
              type="right"
            />
            <Icon
              onClick={this.handleDate.bind(this, "addyear")}
              type="double-right"
            />
          </div>
          <table>
            <thead>
              <tr className={styles.table_thead_tr}>
                {renderArr[0].map(cell => {
                  return (
                    <th className={styles.table_th} key={cell.key}>
                      {cell.day}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {renderArr.slice(1, renderArr.length).map((item, index) => {
                return (
                  <tr key={index} className={styles.table_tbody_tr}>
                    {item.map(cell => {
                      return this.renderTdCell(cell);
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
