import React, { Component } from 'react';
import EditReminder from './EditReminder';
import { Table, Image } from 'react-bootstrap';

class ReminderListTable extends Component {
  state = {
    showEditView: false,
    currentReminder: {}
  }

  render(){
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
              <td><Image onClick={() => this.setState({showEditView: true, currentReminder:item }) } src="/Edit_Icon.png" circle responsive/></td>
              <td><Image onClick={() => this.deleteRecord(item)} src="/Delete_Icon.png" circle responsive/></td>
            </tr>
            )
          })}
        </tbody>
      </Table>
      {this.state.showEditView ? <EditReminder reminder={this.state.currentReminder}/> : null }
</div>
    )
  }
}

export default ReminderListTable;
