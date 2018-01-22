import React from 'react';
import Index from '../index.css';

class Footer extends React.Component {
  constructor(){
    super()
    this.state = {date: new Date()};
  }

  componentDidMount(){
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
   clearInterval(this.timerID);
 }

  getTodayDate(){
    var month = new Array("January","February","March","April","May","June","July","August","September","October","November","December");
    var weekdays = new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
    var current_weekdayname = weekdays[new Date().getDay()];
    var current_date = new Date().getDate();
    var current_month = month[new Date().getMonth()];
    var current_year = new Date().getFullYear();
    var full_current_date = current_weekdayname + ', ' + current_date + ' ' + current_month + ' ' + current_year;
    return full_current_date;
  }

  tick(){
    this.setState({ date: new Date()});
  }

  render(){
    return(
      <div className='footer-main'>
        <p>Copyright &copy; Yulia</p><span className='today-date'>{this.getTodayDate()} {this.state.date.toLocaleTimeString()}</span>
      </div>
    )
  }
}
export default Footer;
