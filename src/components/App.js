import React, { Component } from 'react';
import logo from '../logo.svg';
import { FormGroup, InputGroup, Button } from 'react-bootstrap';
import AppCss from '../App.css';
import ReminderListTable from './ReminderListTable';
import Header from './Header';

class App extends Component {
  constructor(props){
    super(props);
    this.state = { listAll: [] }
  }
  getReminders(){
    var url = "http://localhost:8080/api/reminders";
    fetch(url, {
      method: "GET"
    }).then(response => response.json())
    .then(response => {
      this.setState({ listAll: response });
      console.log(this.state.listAll);
    });
  };

  render() {
    return (
      <div>
        <Header />
        <Button bsStyle="success" bsSize="large" onClick={() => this.getReminders()}>Display all reminders</Button>
        <ReminderListTable remindersAll={ this.state.listAll } />
      </div>
    );
  }

}

export default App;
