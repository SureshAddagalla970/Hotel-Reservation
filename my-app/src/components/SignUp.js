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
          <h1 style={{ color: "GrayText", marginBottom: "40px" }}>SignUp</h1>
          <label>Email</label>&nbsp;
          <input type="email" style={{ marginLeft: "100px" }} />
          <br />
          <br />
          <br />
          <label> Create Password</label>&nbsp;
          <input type="password" style={{ marginLeft: "20px" }} />
          <br />
          <br />
          <br />
          <label> ReType Password</label>&nbsp;
          <input type="password" style={{ marginLeft: "17px" }} />
          <br />
          <br />
          <br />
          <label>PhoneNumber</label>&nbsp;
          <input type="phonenumber" style={{ marginLeft: "35px" }} />
          <br />
          <br />
          <br />
          <Link to="/Login">
            <button style={{ backgroundColor: "green" }}>SignUp</button>
          </Link>
        </form>
      </div>
    );
  }
}
