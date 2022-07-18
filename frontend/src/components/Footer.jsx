import React, { Component } from "react";
import "../css/Footer.css";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <a
          href="https://github.com/devmohit-live/PeerCoder"
          target="_blank"
          rel="noopener noreferrer"
          className="left-footer"
        >
          ⭐ Star Project
        </a>
        <a
          href="https://www.linkedin.com/in/devmohitsingh/"
          target="_blank"
          rel="noopener noreferrer"
          className="right-footer"
        >
          © Coonect With me on Linkedin
        </a>
      </div>
    );
  }
}
export default Footer;
