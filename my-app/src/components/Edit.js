import React, { Component } from "react";
import firebase from "../fire";
import { Link } from "react-router-dom";

class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      key: "",
      RoomNo: "",
      HowManyDaysSpend: "",
      Description: "",
    };
  }

  componentDidMount() {
    const ref = firebase
      .firestore()
      .collection("boards")
      .doc(this.props.match.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        const board = doc.data();
        this.setState({
          key: doc.id,
          RoomNO: board.RoomNo,
          HowManyDaysSpend: board.HowManyDaysSpend,
          Description: board.Description,
        });
      } else {
        console.log("No such document!");
      }
    });
  }

  onChange = (e) => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState({ board: state });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const { RoomNo, HowManyDaysSpend, Description } = this.state;

    const updateRef = firebase
      .firestore()
      .collection("boards")
      .doc(this.state.key);
    updateRef
      .set({
        RoomNo,
        HowManyDaysSpend,
        Description,
      })
      .then((docRef) => {
        this.setState({
          key: "",
          RoomNo: "",
          HowManyDaysSpend: "",
          Description: "",
        });
        this.props.history.push("/show/" + this.props.match.params.id);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  };

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">EDIT Booking</h3>
          </div>
          <div class="panel-body">
            <h4>
              <Link to={`/show/${this.state.key}`} class="btn btn-primary">
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
                  value={this.state.RoomNo}
                  onChange={this.onChange}
                  placeholder="RoomNo"
                />
              </div>
              <div class="form-group">
                <label for="HowManyDaysSpend">HowManyDaysSpend:</label>
                <input
                  type="text"
                  class="form-control"
                  name="HowManyDaysSpend"
                  value={this.state.HowManyDaysSpend}
                  onChange={this.onChange}
                  placeholder="Please Enter Number Only"
                />
              </div>
              <div class="form-group">
                <label for="Description">Description:</label>
                <input
                  type="text"
                  class="form-control"
                  name="Description"
                  value={this.state.Description}
                  onChange={this.onChange}
                  placeholder="Name,PhoneNumber,Description"
                />
              </div>
              <button type="submit" class="btn btn-success">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Edit;
