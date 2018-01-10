import React from 'react';
import { render } from 'react-dom';
import Index from '../index.css';
import { Button } from 'react-bootstrap';

class NewReminderForm extends React.Component {

  // handleTextChange(e){
  //   var url = "http://localhost:8080/api/reminder-new";
  //   fetch(url, {
  //     method: "POST",
  //     desc: '',
  //     expired: '',
  //     created: ''
  //   });
  // }

createReminder(event) {
  event.preventDefault();
  const reminder = {
    desc: this.desc.value,
    expired: this.expired.value,
    created: new Date().toISOString().slice(0,10),
  }
  this.reminderForm.reset();
  console.log(reminder);
}

  render(){
    return(
        <form ref={(input) => this.reminderForm = input} >
          <textarea ref={(input) => this.desc = input} type="text" name="desc" placeholder="your text here"></textarea>
          <input ref={(input) => this.expired = input} type="text" name="expired" placeholder="2018-01-05" />
          <Button bsStyle="success" onClick={(e) => this.createReminder(e)}>Add New</Button>
        </form>
    )
  }
}
export default NewReminderForm;
