import React, { Component } from 'react';
import Index from '../index.css';
import { Button, Modal } from 'react-bootstrap';

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
    }).then (() => {
      return this.props.saveEditedReminder();
    });
    this.props.closePopup();
  }

render(){
    return(
  		<Modal.Dialog className="static-modal">
  			<Modal.Header>
  				<Modal.Title>Edit your new reminder here</Modal.Title>
  			</Modal.Header>
  			<Modal.Body>
          <form className='reminder-edit'>
            <input onChange={(e) => {var editedReminder = {...this.state.editedReminder}; editedReminder.text = e.target.value; this.setState({editedReminder})}} defaultValue={this.props.reminder.text} type="text" name="desc" />
            <input onChange={(e) => {var editedReminder = {...this.state.editedReminder}; editedReminder.expired_by = e.target.value; this.setState({editedReminder})}}  defaultValue={this.props.reminder.expired_by} type="text" name="expired" />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.closePopup} >Close</Button>
          <Button onClick={() => {this.editReminder()} } bsStyle="success">Save Edited</Button>
        </Modal.Footer>
  		</Modal.Dialog>
    )
  }
}

export default EditReminder;
