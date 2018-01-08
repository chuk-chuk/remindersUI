import React from 'react';
import { render } from 'react-dom';
import Index from '../index.css';
import { Button } from 'react-bootstrap';

class NewReminderForm extends React.Component {
  constructor() {
    super();
    this.state = {
      text: '',
      expired: '',
      created: new Date()
    };
    this.handleTextChange = this.handleTextChange.bind(this);
  }

  handleTextChange(e){
    console.log(this.state);
    this.setState({ text: e.target.value });
    var url = "http://localhost:8080/api/reminder-new";
    fetch(url, {
      method: "POST",
      text: '',
      expired: '',
      created: ''
    });
  }

  render(){
    return(
      <div className='new-reminder-form-main'>
        <form>
          <input type="text" name="text" placeholder="your text here" />
          <input type="text" name="expired" placeholder="2018-01-05" />
          <Button bsStyle="success" onClick={() => this.handleTextChange()}>Add New</Button>
        </form>
      </div>
    )
  }
}
export default NewReminderForm;
