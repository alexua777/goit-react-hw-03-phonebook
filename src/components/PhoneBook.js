import React, { Component } from "react";

export default class PhoneBook extends Component {
  state = {
    name: "",
    number: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    this.props.onAddContact(this.state.name, this.state.number);
    this.setState({ name: "", number: "" });
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            type="text"
            value={this.state.name}
            onChange={this.handleChange}
            name="name"
          />
        </label>
        <label>
          Phone Number
          <input
            type="number"
            value={this.state.number}
            onChange={this.handleChange}
            name="number"
          />
        </label>
        <button type="submit"> Add contact</button>
      </form>
    );
  }
}
