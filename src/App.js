import React, { Component } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/Header";
import MainNav from "./MainNav";
import Registration from "./auth/Registration";
import Login from "./auth/Login";
import Job from "./components/Job";
import SearchForm from "./SearchForm";
import Home from "./components/Home";

import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedInStatus: "NOT_LOGGED_IN",
      user: {},
    };

    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  checkLoginStatus() {
    axios
      .get(`${process.env.REACT_APP_BACKEND}api/users`)
      .then((response) => {
        console.log("this is the response");

        console.log("this is line 38 app.js");

        console.log("check login status response");
        console.log(response);

        if (
          response.data.logged_in &&
          this.state.loggedInStatus === "NOT_LOGGED_IN"
        ) {
          this.setState({
            loggedInStatus: "LOGGED_IN",
            user: response.data.user,
          });
        } else if (
          !response.data.logged_in &
          (this.state.loggedInStatus === "LOGGED_IN")
        ) {
          this.setState({
            loggedInStatus: "NOT_LOGGED_IN",
            user: {},
          });
        }
      })
      .catch((error) => {
        console.log("check login error", error);
      });
  }

  componentDidMount() {
    this.checkLoginStatus();
  }
  handleLogout() {
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN",
      user: {},
    });
  }
  handleLogin(data) {
    this.setState({
      loggedInStatus: "LOGGED_IN",
      user: data.user,
    });
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Header />
          <Switch>
            <Route
              exact
              path={"/"}
              // render={props} gives us all the props of React Router and allows us to add more
              render={(props) => (
                <div>
                  <Home
                    {...props}
                    handleLogin={this.handleLogin}
                    handleLogout={this.handleLogout}
                    loggedInStatus={this.state.loggedInStatus}
                  />
                </div>
              )}
            />
            <Route path="/home">
              <MainNav />
              <div className="logo">
                <div className="subtitle">
                  {" "}
                  <h2>Careers taking off daily!</h2>
                  <h2>Reserve yours today!</h2>
                </div>
                <SearchForm />
              </div>
            </Route>
            <Route path="/logout">
              <div className="logo">
                <div className="subtitle">
                  <h1>Thank you for visiting.</h1>
                  <h3>You are successfully logged out.</h3>
                </div>
                <Registration />
                <Login />
              </div>
            </Route>
            <Route path="/all_listings">
              <div className="logo">
                <MainNav />
                <Job />
              </div>
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
export default App;
