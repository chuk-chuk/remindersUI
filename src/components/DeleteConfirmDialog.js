import React, { Component } from 'react';
import Index from '../index.css';
import { Button, Modal } from 'react-bootstrap';

class DeleteConfirmDialog extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    return(
    	<Modal.Dialog className="static-modal">
    		<Modal.Header>
    			<Modal.Title>Are you sure?</Modal.Title>
    		</Modal.Header>

    		<Modal.Body>Would you like to remove this item from the list?</Modal.Body>

    		<Modal.Footer>
          <Button onClick={() => this.props.deleteMe(this.props.reminder) }>Yes</Button>
          <Button onClick={this.props.closePopup} >No</Button>
    		</Modal.Footer>
    	</Modal.Dialog>
    )
  }
}

export default DeleteConfirmDialog;
