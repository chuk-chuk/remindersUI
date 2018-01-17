import React, { Component } from 'react';
import Index from '../index.css';
import { Button } from 'react-bootstrap';

class NewReminderForm extends Component {
  createReminder (event) {
    event.preventDefault();
    const reminder = {
      desc: this.desc.value,
      expired: this.expired.value,
      created: new Date().toISOString().slice(0,10),
    }
    // this.props.addReminder(reminder);
    this.reminderForm.reset();
  };

render(){
    return(
        <form className='reminder-edit' ref={(input) => this.reminderForm = input} >
          <textarea ref={(input) => this.desc = input} onChange={(e) =>  this.setState({ desc: e.target.desc})}  type="text" name="desc" placeholder="your description here"></textarea>
          <input ref={(input) => this.expired = input} onChange={(e) =>  this.setState({ expired: e.target.expired})} type="text" name="expired" placeholder="2018-01-05" />
          <Button bsStyle="success" onClick={(e) => this.createReminder(e)}>Save Reminder</Button>
        </form>
    )
  }
}

export default NewReminderForm;
