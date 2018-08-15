import Card from './components/Card';
import React, { Component } from "react";
// import logo from "./assets/img/prof-pic.jpg";
import logo from "./assets/img/logo.png";
import "./App.css";
import axios from 'axios';

class App extends Component {
  state = {
    name: '',
    email: '',
    company: ''
  }

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

    if ((this.state.name === "") || (this.state.email === "") || (this.state.company === "")) {
      alert("Fill out all the fields!");
    } else {

      var obj = {
        name: this.state.name,
        email: this.state.email,
        company: this.state.company
      }

      axios.post('/api/contact', obj).then(res => {
        window.location.reload();
      })

      this.setState({
        name: '',
        email: '',
        company: ''
      });
    }
  };

  render() {

    return (
      <div className="container">
        <div className="App-header">
          <img src={logo} style={{height: 100}} alt="logo" />
        </div>
        <div className="Main-content">
          <Card handleInputChange={this.handleInputChange} handleFormSubmit={this.handleFormSubmit} />
        </div>
      </div>
    );
  }
}

export default App;
