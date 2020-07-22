import React, { Component } from "react";
import "./App.css";
import Header from "./Header";
import Job from "./Job";
import Sidebar from "./Sidebar";
import User from "./User";
import SearchForm from "./SearchForm";
import Home from "./Home";
import Dashboard from "./Dashboard";
import Registration from "./auth/Registration";
import Login from "./auth/Login";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
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
        console.log("this is node env");
        console.log(process.env.NODE_ENV);
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
  // this is also in Home
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

            {/* <Route path="/login">
              <div className="logo">
                <h1>Sign-in form</h1>
              </div>
            </Route> */}
            <Route path="/logout">
              <div className="logo">
                <h1>Thank you for visiting.</h1>
                <h3>You are successfully logged out.</h3>
                <Registration />
                <Login />
              </div>
            </Route>
            <Route
              exact
              path={"/dashboard"}
              render={(props) => (
                <div>
                <div>
                  <h1>Welcome to Application Station</h1>
                  <Dashboard
                    {...props}
                    loggedInStatus={this.state.loggedInStatus}
                  />
                
                </div>
                <div>  {<Sidebar /> }</div>
                </div>
              )}
            />

            <Route path="/home">
              <div className="logo">
                <div className="subtitle">
                  {" "}
                  <h2>Careers taking off daily!</h2>
                  <h2>Reserve your's today!</h2>
                </div>

                <SearchForm />
              </div>
            </Route>
            <Route path="/admin">
              <div className="logo">
                <div>
                  <h2>User Data</h2>
                  <User />
                  <h2>Job Data</h2>
                  <Job />
                </div>
              </div>
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
