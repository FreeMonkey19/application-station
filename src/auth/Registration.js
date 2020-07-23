import React, { Component } from "react";
import axios from "axios";

export default class Registration extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
      registrationErrors: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  // take in and update state
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  // when the form is submitted for a new user
  handleSubmit(event) {
    const { name, email, password, password_confirmation } = this.state;

    axios
      .post(`${process.env.REACT_APP_BACKEND}api/users/registrations`, {
        user: {
          name: name,
          email: email,
          password: password,
          password_confirmation: password_confirmation,
        },
      })
      .then((response) => {
        console.log("this is the response");
        if (response.status === 201) {
          this.props.handleSuccessfulAuth(response.data);
        }
      })
      .catch((error) => {
        console.log("registration error", error);
      });
    event.preventDefault();
  }
  render() {
    return (
      <div className="centered search-params">
        <form onSubmit={this.handleSubmit}>
        <h3>New to this site?</h3>
        <h4>Register Here</h4>

          <label htmlFor="name">
            Name
            <input
              type="text"
              name="name"
              placeholder="name"
              value={this.state.name}
              onChange={this.handleChange}
              required
            ></input>
          </label>
          <label htmlFor="email">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={this.handleChange}
              required
            ></input>
          </label>
          <label htmlFor="password">
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChange}
            required
          ></input></label>
          <label htmlFor="password">
          <input
            type="password"
            name="password_confirmation"
            placeholder="Password_confirmation"
            value={this.state.password_confirmation}
            onChange={this.handleChange}
            required
          ></input></label>

          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
}
