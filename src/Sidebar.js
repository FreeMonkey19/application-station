import React, { Component } from "react";
import "./Sidebar.css";


export class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar-container">
        <div className="sidebar-wrapper">
          <div className="sidebar-quote-container">
            <p className="sidebar-quote">
              "Let no man tell you - you cannot do something. Instead, be that something and pay it forward!"
            </p>
            <p className="quote-author">-Author Unknown</p>
          </div>

          <div className="sidebar-pics-container">
            <div className="sidebar-pic">
                A photo goes here
            </div>{" "}
            <span className="photo-description">
              Description of photo here
            </span>
          </div>
          <div className="sidebar-nav-container">
              This is the sidebar nav container
             <a
              className="sidebar-a-link"
              href="https://www.monster.com"
              target="_blank"
              rel="noopener noreferrer"
            >
                clickable logo goes here
             </a>

            <a
              className="sidebar-a-link"
              href="https://www.buildseattle.com"
              target="_blank"
              rel="noopener noreferrer"
            >
                clickable logo goes here
            </a> 
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
