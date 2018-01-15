import React, { Component } from 'react';
import EditReminder from './EditReminder';
import { Table, Image } from 'react-bootstrap';
import deleteImage from '../delete_Icon.png';
import editImage from '../edit_Icon.png';

class ReminderListTable extends Component {
  constructor() {
    super();
    this.deleteRecord = this.deleteRecord.bind(this);
  }

  state = {
    showEditView: false,
    currentReminder: {}
  }

  deleteRecord() {
    alert('deleting');
  }

  render() {

    const { showEditView, currentReminder } = this.state;
    console.log(this.state);

    return(
      <div>
            <Table responsive striped hover>
              <thead>
                <tr>
                  <th>Description</th>
                  <th>Created on</th>
                  <th>To be completed by</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {this.props.remindersAll.map((item) => {
                  return(
                    <tr key={item._id}>
                    <td>{item.text}</td>
                    <td>{item.created_at}</td>
                    <td>{item.expired_by}</td>
                    <td><Image onClick={() => this.setState({showEditView: true, currentReminder:item }) } src={editImage} circle responsive/></td>
                    <td><Image onClick={() => this.deleteRecord(item)} src={deleteImage} circle responsive/></td>
                  </tr>
                  )
                })}
              </tbody>
            </Table>

            {showEditView && (
              <EditReminder reminder={currentReminder}/>
            )}

      </div>
    )
  }
}

export default ReminderListTable;
