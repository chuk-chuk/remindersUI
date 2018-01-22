import React, { Component } from 'react';
import EditReminder from './EditReminder';
import DeleteConfirmDialog from './DeleteConfirmDialog';
import { Table, Image } from 'react-bootstrap';
import deleteImage from '../delete_Icon.png';
import editImage from '../edit_Icon.png';
const URL = "http://localhost:8080/api/reminders/";

class ReminderListTable extends Component {
  constructor(props) {
    super(props);
    this.deleteRecord = this.deleteRecord.bind(this);
    this.onButtonClick = this.onButtonClick.bind(this);
    this.onDeleteImageClick = this.onDeleteImageClick.bind(this);
    this.saveEditedReminder = this.saveEditedReminder.bind(this);
  }

  state = {
    showEditView: false,
    showDeleteView: false,
    currentReminder: {},
  }

  onButtonClick() {
   this.setState({
     showEditView: !this.state.showEditView,
   });
 }

  onDeleteImageClick() {
    this.setState({
      showDeleteView: !this.state.showDeleteView,
    });
  }

  deleteRecord(id) {
    var url = `${URL}${id}`;
    console.log(id);
    fetch(url, {
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
      method: "POST",
    }).then (()=>{
      return this.props.getReminders();
    });
    this.onDeleteImageClick();
  }

  saveEditedReminder(){
    this.props.getReminders();
  }

  render() {

    const { currentReminder } = this.state;

    return(
      <div>
            <Table responsive striped hover>
              <thead>
                <tr>
                  <th>Description</th>
                  <th>Created</th>
                  <th>Completed by</th>
                  <th>Edit</th>
                  <th></th>
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
                      {this.state.showEditView ? <EditReminder saveEditedReminder={this.saveEditedReminder} reminder={currentReminder} closePopup={this.onButtonClick}/> : null }
                      <td><span onClick={() => this.setState({showDeleteView: true, currentReminder:item }) }>&times;</span></td>
                      {this.state.showDeleteView ? <DeleteConfirmDialog deleteMe={this.deleteRecord} reminder={currentReminder._id} closePopup={this.onDeleteImageClick}/> : null }
                    </tr>
                  )
                })}
              </tbody>
            </Table>
      </div>
    )
  }
}

export default ReminderListTable;
