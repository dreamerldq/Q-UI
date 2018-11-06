import React from 'react';
import { SSL_OP_MICROSOFT_BIG_SSLV3_BUFFER } from 'constants';
import styles from './index.scss';

export default class HauInputNumber extends React.Component {
  constructor(props) {
    super(props);
    this.handleNumberSub = this.handleNumber.bind(this, 'sub');
    this.handleNumberAdd = this.handleNumber.bind(this, 'add');
    this.myRef = React.createRef();
    this.state={
      show:false
    }
  }

  handleNumber(type) {
    const {
      value, max, min,
    } = this.props;
    const step = this.props.step || 1;
    if (type === 'sub') {
      const number = value - step;
      if (number >= min) { this.props.onChange(number); }
    } else {
      const number = value + step;
      if (number <= max) { this.props.onChange(number); }
    }
  }

  componentDidMount() {
    this.myRef.current.focus();
  }
  changeNumber = (e) => {
    const {max, min} = this.props
    const {value} = e.target
    if(value>=min && value<=max){
      this.props.onChange(e.target.value)
    }
    
  }
  handleShow = (e) =>{
    this.setState({
      show: !this.state.show
    })
  }
  render() {
    return (
      <div style={{ width: '100px' }} className={styles.input_number}>
        <div><input
         onFocus={this.handleShow}
         onBlur={this.handleShow}
         onChange={this.changeNumber} ref={this.myRef} value={this.props.value}/></div>
        <div className={styles.input_number_func}>
          <span onClick={this.handleNumberAdd}>+</span>
          <span onClick={this.handleNumberSub}>-</span>
        </div>
      </div>
    );
  }
}
