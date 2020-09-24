import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Nav,
  Form,
  Navbar,
  FormControl,
  Row,
  Col,
  Image,
  Container,
} from "react-bootstrap";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand style={{ color: "gray" }}>
            WELCOME TO HOTEL RESERVATION SITE
          </Navbar.Brand>
          <Nav className="mr-auto">
            <Link to="/SignUp">
              <Nav.Link href="#SignUp" style={{ marginLeft: "700px" }}>
                SignUp
              </Nav.Link>
            </Link>
            <Link to="/Login">
              {" "}
              <Nav.Link href="#SignIn">SignIn</Nav.Link>
            </Link>
          </Nav>
        </Navbar>
        <Image
          src="https://cdn.jumeirah.com/-/mediadh/dh/hospitality/jumeirah/hotels/dubai/jumeirah-beach-hotel/hero/jumeirah-beach-hotel-pool-top-view_6-4_landscape.jpg?h=1080&w=1620"
          fluid
        />
      </div>
    );
  }
}
