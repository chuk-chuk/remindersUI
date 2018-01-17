import React, { Component } from 'react';
import Index from '../index.css';
import { Button } from 'react-bootstrap';

const URL = "http://localhost:8080/api/reminders/"

class EditReminder extends Component {
  constructor(props){
    super(props);
    this.editReminder = this.editReminder.bind(this);
  }
  state = {
    editedReminder:this.props.reminder,
  }

  editReminder() {
    var url = `${URL}${this.props.reminder._id}`;
    fetch(url, {
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
      method: "PUT",
      body: JSON.stringify(this.state.editedReminder)
    }, function(){
      this.getReminders();
    });
  }

render(){
    return(
        <form className="edit-form">
          <input onChange={(e) => {var editedReminder = {...this.state.editedReminder}; editedReminder.text = e.target.value; this.setState({editedReminder})}} defaultValue={this.props.reminder.text} type="text" name="desc" />
          <input onChange={(e) => {var editedReminder = {...this.state.editedReminder}; editedReminder.expired_by = e.target.value; this.setState({editedReminder})}}  defaultValue={this.props.reminder.expired_by} type="text" name="expired" />
          <Button onClick={() => { this.editReminder() } } bsStyle="success">Save Edited</Button>
        </form>
    )
  }
}

export default EditReminder;
