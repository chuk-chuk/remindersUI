import React, { Component } from 'react';
import Index from '../index.css';
import { Button, Modal } from 'react-bootstrap';

class NewReminderForm extends Component {
  constructor(props) {
    super(props);
  }

  createReminder (event) {
    event.preventDefault();
    const reminder = {
      desc: this.desc.value,
      expired: this.expired.value,
      created: new Date().toISOString().slice(0,10),
    }
    this.props.callTheAddReminderMethod(reminder);
    this.reminderForm.reset();
  };

render(){
    return(
      <div className="static-modal">
  		<Modal.Dialog>
  			<Modal.Header>
  				<Modal.Title>Enter your new reminder here</Modal.Title>
  			</Modal.Header>
  			<Modal.Body>
          <form className='reminder-edit' ref={(input) => this.reminderForm = input} >
            <input ref={(input) => this.desc = input} onChange={(e) =>  this.setState({ desc: e.target.desc})}  type="text" name="desc" placeholder="your description here"/>
            <input ref={(input) => this.expired = input} onChange={(e) =>  this.setState({ expired: e.target.expired})} type="text" name="expired" placeholder="2018-01-05" />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.closePopup} >Close</Button>
          <Button bsStyle="success" onClick={(e) => this.createReminder(e)}>Save Reminder</Button>
        </Modal.Footer>
  		</Modal.Dialog>
	</div>
    )
  }
}

export default NewReminderForm;
