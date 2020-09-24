import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Login extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "100px",
        }}
      >
        <form>
          <h1 style={{ color: "GrayText", marginBottom: "40px" }}>Login</h1>
          <label>Email</label>&nbsp;
          <input type="email" style={{ marginLeft: "40px" }} />
          <br />
          <br />
          <br />
          <label>Password</label>&nbsp;
          <input type="password" style={{ marginLeft: "15px" }} />
          <br />
          <br />
          <br />
          <input type="checkbox" />
          <label>RememberMe</label>
          <Link to="/Main">
            <button style={{ marginLeft: "100px", backgroundColor: "green" }}>
              Submit
            </button>
          </Link>
        </form>
      </div>
    );
  }
}
