import React from 'react';
import { Table } from 'react-bootstrap';

const ReminderListTable = (props) => {
    return(
      <Table responsive striped hover>
        <thead>
    <tr>
      <th>Description</th>
      <th>Created on</th>
      <th>To be completed by</th>
    </tr>
  </thead>
  <tbody>
        {props.remindersAll.map((item, key) => {
            return(
              <tr key={key}>
              <td>{item.text}</td>
              <td>{item.created_at}</td>
              <td>{item.expired_by}</td>
            </tr>
            )
          })}
          </tbody>
      </Table>
    )
  }

export default ReminderListTable;
