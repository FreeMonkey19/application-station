import React, { Component } from "react";
import "./App.css";
import Header from "./Header";
import Job from "./Job";
import Sidebar from "./Sidebar";
// import User from "./User";
import SearchForm from "./SearchForm";
import Home from "./Home";
import Dashboard from "./Dashboard";
import {
  HashRouter as Router,
  // Redirect,
  Switch,
  Route,
} from "react-router-dom";
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
                <Home
                  {...props}
                  handleLogin={this.handleLogin}
                  handleLogout={this.handleLogout}
                  loggedInStatus={this.state.loggedInStatus}
                />
              )}
            />

            {/* <Route path="/login">
              <div className="logo">
                <h1>Sign-in form</h1>
              </div>
            </Route> */}
            {/* <Route path="/logged">
              <div className="logo">
                <h1>If you are here you are logged in. </h1>
              
              </div>
            </Route> */}
            <Route
              exact
              path={"/dashboard"}
              render={(props) => (
                <div>
                  <h1>Welcome to Application Station</h1>
                  <Dashboard
                    {...props}
                    loggedInStatus={this.state.loggedInStatus}
                  />
                   <Job />
                
                </div>
              )}
            />

            <Route path="/home">
              <div className="logo">
              <SearchForm />
                  <Sidebar />
              
              </div>
            </Route>
            {/* <Route path="/admin">
              <div className="logo">
                <h1>Admin Page</h1>
                <User />
               
              </div>
            </Route> */}
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
