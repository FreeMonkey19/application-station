import React, { Component } from "react";
// import { render } from '@testing-library/react';
// import SearchForm from './SearchForm';
// import Sidebar from './Sidebar';

import axios from "axios";

import Registration from "./auth/Registration";
import Login from "./auth/Login";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
  }

  handleSuccessfulAuth(data) {
    //   update parent component with render props
    this.props.handleLogin(data);

    // redirect user - Home is defined inside a route. 
    // we have access to .history via Router props in App.js where we render Home.
    // here the user is successfully registered and as soon as that takes place - redirect to dashboard
    this.props.history.push("/dashboard");
  }

  handleLogoutClick() {
    axios
      .delete("/auth/logout")
      .then(response => {
          console.log(response)
        this.props.handleLogout();
      })
      .catch(error => {
        console.log("logout error", error);
      });
  }


  render() {
    return (
      <div>
        <h1>Home</h1>
        <h1>Status: {this.props.loggedInStatus}</h1>
        <button onClick={() => this.handleLogoutClick()}>Logout</button>
        <Registration handleSuccessfulAuth={this.handleSuccessfulAuth} />
        <Login handleSuccessfulAuth={this.handleSuccessfulAuth} />
      </div>
    );
  }
}
