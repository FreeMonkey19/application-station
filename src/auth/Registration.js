import React, { Component } from "react";
import axios from "axios";

export default class Registration extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      // email: "",
      // password: "",
      // password_confirmation: "",
      registrationErrors: "",
    };

    this.handleSumbit = this.handleSumbit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSumbit(event) {
    const { name } = this.state;
    // email, password, password_confirmation,

    axios
      .post(
        // call flask
        "http://localhost:5000/api/users/registrations",
        {
          user: {
            name: name,
            // email: email,
            // password: password,
            // password_confirmation: password_confirmation,
          },
        }
      )
      .then((response) => {
        // is user logged in?
        console.log("registration response", response);
      })
      .catch((error) => {
        console.log("registration error", error);
      });
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSumbit}>
          <input
            type="name"
            name="name"
            placeholder="Name"
            value={this.state.name}
            onChange={this.handleChange}
            required
          ></input>
          {/* <input
            type="email"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleChange}
            required
          ></input> */}
          {/* <input
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChange}
            required
          ></input> */}
          {/* <input
            type="password_confirmation"
            name="password_confirmation"
            placeholder="Password_confirmation"
            value={this.state.password_confirmation}
            onChange={this.handleChange}
            required
          ></input> */}

          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
}
