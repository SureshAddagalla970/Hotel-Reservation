import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import firebase from "./fire";

class App extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection("boards");
    this.unsubscribe = null;
    this.state = {
      boards: [],
    };
  }

  onCollectionUpdate = (querySnapshot) => {
    const boards = [];
    querySnapshot.forEach((doc) => {
      const { RoomNo, HowManyDaysSpend, Description } = doc.data();
      boards.push({
        key: doc.id,
        doc, // DocumentSnapshot
        RoomNo,
        HowManyDaysSpend,
        Description,
      });
    });
    this.setState({
      boards,
    });
  };

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">Booking List</h3>
          </div>
          <div class="panel-body">
            <h4>
              <Link to="/create" class="btn btn-primary">
                Add Booking
              </Link>
            </h4>
            <table class="table table-stripe">
              <thead>
                <tr>
                  <th>RoomNo</th>
                  <th>HowManyDaysSpend</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                {this.state.boards.map((board) => (
                  <tr>
                    <td>
                      <Link to={`/show/${board.key}`}>{board.RoomNo}</Link>
                    </td>
                    <td>{board.HowManyDaysSpend}</td>
                    <td>{board.Description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <Link to="/Main">
          {" "}
          <button class="btn btn-success">Back Home</button>
        </Link>
      </div>
    );
  }
}

export default App;
