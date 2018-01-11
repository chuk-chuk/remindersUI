import React, { Component } from 'react';
import { render } from 'react-dom';
import Index from '../index.css';
import { Button } from 'react-bootstrap';

class NewReminderForm extends Component {
  constructor(props){
    super(props);

    this.state = {
      desc: "",
      expired: "",
    }
  }

 createReminder (event) {
    event.preventDefault();
    const reminder = {
      desc: this.state.desc,
      expired: this.state.expired,
      created: new Date().toISOString().slice(0,10),
    }
    this.props.addReminder(reminder);
    this.reminderForm.reset();
    console.log(reminder)
  };

render(){
    return(
        <form className='reminder-edit' ref={(input) => this.reminderForm = input} >
          <textarea onChange={(e) =>  this.setState({ desc: e.target.value})}  type="text" name="desc" placeholder="your description here"></textarea>
          <input onChange={(e) =>  this.setState({ expired: e.target.value})} type="text" name="expired" placeholder="2018-01-05" />
          <Button bsStyle="success" onClick={(e) => this.createReminder(e)}>Add New</Button>
        </form>
    )
  }
}

export default NewReminderForm;
