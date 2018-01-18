import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import ReminderListTable from './ReminderListTable';
import Header from './Header';
import Footer from './Footer';
import NewReminderForm from './NewReminderForm';

class App extends Component {
  constructor(props){
    super(props);
    this.addReminder = this.addReminder.bind(this);
    this.onButtonClick = this.onButtonClick.bind(this);
    this.state = {
      listAll: [],
      desc: "",
      expired: "",
      showComponent: false,
    };
  }

  onButtonClick() {
   this.setState({
     showComponent: !this.state.showComponent,
   });
 }

  getReminders(){
    var url = "http://localhost:8080/api/reminders";
    fetch(url, {
      method: "GET"
    }).then(response => response.json())
    .then(response => {
      this.setState({ listAll: response });
    });
  }

  addReminder(reminder) {
    var url = "http://localhost:8080/api/reminder-new";
    fetch(url, {
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
      method: "POST",
      body: JSON.stringify({
        text: reminder.desc,
        expired_by: reminder.expired,
        created_at: reminder.created})
    }, function(){
      this.getReminders();

    });
  }

  render() {
    return (
      <div>
        <Header />
        <div className='main-body'>
          <Button bsStyle="success" bsSize="large" onClick={() => this.getReminders()}>Display all reminders</Button>
          <ReminderListTable remindersAll={ this.state.listAll }  />
          <Button bsStyle="success" bsSize="large" onClick={ this.onButtonClick }>Add Reminder</Button>
          {this.state.showComponent ? <NewReminderForm callTheAddReminderMethod={this.addReminder} closePopup={this.onButtonClick}/> : null }
        </div>
        <Footer />
      </div>
    );
  }

}

export default App;
