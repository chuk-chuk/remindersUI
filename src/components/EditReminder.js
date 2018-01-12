import React, { Component } from 'react';
import Index from '../index.css';
import { Button } from 'react-bootstrap';

const URL = "http://localhost:8080/api/reminders/"

class EditReminder extends Component {
  constructor(props){
    super(props);
    this.editReminder = this.editReminder.bind(this);
  }
  state={
    editedReminder:this.props.reminder
  }

  editReminder(reminder) {
    console.log(reminder);
    var url = `${URL}${this.props.reminder._id}`;
    fetch(url, {
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
      method: "PUT",
      body: JSON.stringify(reminder)
    }, function(){
      this.getReminders();
    });
  }

render(){
    return(
        <form>
          <input onChange={(e) => this.setState({...this.state.editedReminder, text:e.target.value})} defaultValue={this.props.reminder.text} type="text" name="desc" />
          <input onChange={(e) => this.setState({...this.state.editedReminder, expired_by:e.target.value})} defaultValue={this.props.reminder.expired_by} type="text" name="expired" />
          <Button onClick={(e) => this.editReminder(this.state.editedReminder)} bsStyle="success">Save</Button>
        </form>
    )
  }
}

export default EditReminder;
