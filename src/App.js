import React, { Component } from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
// import User from "./components/User";
// import SearchParams from "./components/SearchParams"
import { HashRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="App">
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <div className="main-logo">
                <h1>Home Page</h1>
                <Sidebar />
              </div>
            </Route>
            <Route path="/sign_in">
              <div className="logo">
                <h1>Sign-in form</h1>
              </div>
            </Route>
            <Route path="/dashboard">
              <div className="logo">
                <h1>Dashboard</h1>
              </div>
            </Route>
            <Route path="/search_form">
              <div className="logo">
                <h1>Job search form</h1>
              </div>
            </Route>
            <Route path="/search_results">
              <div className="logo">
                <h1>Search results</h1>
              </div>
            </Route>
            <Route path="/users">
              <div className="logo">
                <h1>Hello Users</h1>
              </div>
            </Route>

          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
