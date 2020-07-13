import React, { Component } from "react";
import "./App.css";
import Header from "./Header";
import Job from './Job';
import Sidebar from "./Sidebar";
import User from "./User";
import SearchForm from "./SearchForm"
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
                <h1 className="home-page-title">Your Career Begins Here!</h1>
                <SearchForm />

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
            {/* <Route path="/search_form">
              <div className="logo">

              </div>
            </Route> */}
            <Route path="/search_results">
              <div className="logo">
                <h1>All Search results</h1>
                <Job />
              </div>
            </Route>
            <Route path="/users">
              <div className="logo">
                <h1>Hello Users</h1>
                <User />
              </div>
            </Route>

          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
