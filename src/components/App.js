import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import ReminderListTable from './ReminderListTable';
import Header from './Header';
import Footer from './Footer';
import NewReminderForm from './NewReminderForm';

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
        <NewReminderForm />
        <Footer />
      </div>
    );
  }

}

export default App;
