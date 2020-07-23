import React, { Component } from "react";

import Login from "../auth/Login";
import Registration from "../auth/Registration";

import axios from "axios";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
  }

  handleSuccessfulAuth(data) {
    //  update parent component with render props
    this.props.handleLogin(data);
    console.log("right here charlotte");
    console.log(data);

    // redirect user - Home is defined inside a route.
    // we have access to .history via Router props in App.js where we render Home.
    // here the user is successfully registered and as soon as that takes place - redirect to dashboard
    this.props.history.push("/home");
  }

  handleLogoutClick() {
    axios
      .delete("/auth/logout")
      .then((response) => {
        console.log(response);
        this.props.handleLogout();
      })
      .catch((error) => {
        console.log("logout error", error);
      });
    this.props.history.push("/");
  }

  render() {
    return (
      <div>
        <Registration handleSuccessfulAuth={this.handleSuccessfulAuth} />
        <Login handleSuccessfulAuth={this.handleSuccessfulAuth} />
      </div>
    );
  }
}
