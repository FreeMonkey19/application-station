import React, { Component } from "react";
import { MainNav } from "./MainNav";
import "./Header.css";

export class Header extends Component {
  render() {
    return (
      <header className="main-header">
        <div className="title-container">
          <div className="main-page-title">
            <h1 className="title">Application Station:</h1>
          </div>
          <div className="page-subtitle">
            <h2 className="header-subtitle">
              Your Search Stops Here!.
            </h2>
          </div>
        </div>
        <MainNav />
      </header>
    );
  }
}

export default Header;
