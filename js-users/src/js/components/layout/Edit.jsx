import React, { Component } from "react";

class Edit extends Component {
  state = {
    firstname: "",
    lastname: ""
  };

  initState = () => {
    this.setState({
      firstname: "",
      lastname: ""
    });
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log("Edit : handleSubmit : this.props : ", this.props);
    //this.props.history.push("/users");
    this.props.createUser(this.state);
  };

  constructor(props) {
    super(props);
    const { userSelected } = this.props;
    if (userSelected !== undefined && userSelected !== null) {
      const { first_name, last_name } = userSelected;
      if (first_name !== undefined || last_name !== undefined) {
        this.state.first_name = first_name;
        this.state.last_name = last_name;
      }
    }
  }

  render() {
    const { userCreated, success } = this.props;
    let error_first_name = null;
    let error_last_name = null;

    if (userCreated != null) {
      const { first_name, last_name, id } = userCreated;

      // Failed to create a user. We have some error messages.
      if (id === undefined || id === null) {
        if (first_name !== undefined) error_first_name = first_name;
        if (last_name !== undefined) error_last_name = last_name;
      }
    }

    return (
      <div>
        <form className="form" onSubmit={this.handleSubmit}>
          <div className="container">
            <h1>Edit user:</h1>
            <input
              type="text"
              name="firstname"
              id="firstname"
              placeholder="FirstName"
              onChange={this.handleChange}
              value={this.state.firstname}
            />
            {error_first_name !== null ? (
              <span style={errorStyle}>{error_first_name}</span>
            ) : null}

            <input
              type="text"
              name="lastname"
              id="lastname"
              placeholder="LastName"
              onChange={this.handleChange}
              value={this.state.lastname}
            />
            {error_last_name !== null ? (
              <span style={errorStyle}>{error_last_name}</span>
            ) : null}

            <button className="btn-create" value="Update">
              Update
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const errorStyle = {
  color: "red",
  fontSize: "0.8em",
  fontWeight: "bold"
};

export default Edit;
