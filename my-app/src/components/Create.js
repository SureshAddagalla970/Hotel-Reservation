import React, { Component } from "react";
import ReactDOM from "react-dom";
import firebase from "../fire";
import { Link } from "react-router-dom";

class Create extends Component {
  constructor() {
    super();
    this.ref = firebase.firestore().collection("boards");
    this.state = {
      RoomNo: "",
      HowManyDaysSpend: "",
      Description: "",
    };
  }
  onChange = (e) => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  };

  onSubmit = (e) => {
    e.preventDefault();

    const { RoomNo, HowManyDaysSpend, Description } = this.state;

    this.ref
      .add({
        RoomNo,
        HowManyDaysSpend,
        Description,
      })
      .then((docRef) => {
        this.setState({
          RoomNo: "",
          HowManyDaysSpend: "",
          Description: "",
        });
        this.props.history.push("/");
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  };

  render() {
    const { RoomNo, HowManyDaysSpend, Description } = this.state;
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">BookRoom</h3>
          </div>
          <div class="panel-body">
            <h4>
              <Link to="/App" class="btn btn-primary">
                Booking List
              </Link>
            </h4>
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="RoomNo">RoomNo:</label>
                <input
                  type="text"
                  class="form-control"
                  name="RoomNo"
                  value={RoomNo}
                  onChange={this.onChange}
                  placeholder="RoomNo"
                />
              </div>
              <div class="form-group">
                <label for="HowManyDaysSpend">HowManyDaysSpend?:</label>
                <input
                  type="number"
                  class="form-control"
                  name="HowManyDaysSpend"
                  onChange={this.onChange}
                  placeholder="Please Enter How Many Days Spend Here."
                  value={HowManyDaysSpend}
                />
              </div>
              <div class="form-group">
                <label for="Description">Description:</label>
                <input
                  type="text"
                  class="form-control"
                  name="Description"
                  value={Description}
                  onChange={this.onChange}
                  placeholder="Name,PhoneNumber,Details"
                />
              </div>
              <button type="submit" class="btn btn-success">
                Confirm Booking
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Create;
