import React, { Component } from "react";
import axios from "axios";
// import "./Login.css";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      loginErrors: "",
    };

    this.handleSumbit = this.handleSumbit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  // when the form is submitted for a returning user
  handleSumbit(event) {
    const { email, password } = this.state;

    axios
      .post(
        // call flask
        `${process.env.REACT_APP_BACKEND}api/users/login`,
        {
          user: {
            email: email,
            password: password,
          },
        }
      )
      .then((response) => {
        console.log("this is it charlotte");
        console.log("from login", response);
        if (response.status === 200) {
          this.props.handleSuccessfulAuth(response.data);
        }
      })
      .catch((error) => {
        console.log("login error", error);
      });
    event.preventDefault();
  }

  render() {
    return (
      <div className="search-params">
        <form onSubmit={this.handleSumbit}>
          <h3>Returning User?</h3>
          <h4>Sign In Here</h4>
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
              id="password"
              name="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleChange}
              required
            ></input>
          </label>

          <button type="submit">Login</button>
        </form>
      </div> //
    ); // this is the return closing tab
  } // this is the render closing bracket
}
