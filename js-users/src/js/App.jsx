import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Show from "./components/layout/Show";
import New from "./components/layout/New";
import Edit from "./components/layout/Edit";

class App extends Component {
  state = {
    users: [],
    pageEnd: 0,
    userCreated: null,
    userSelectedId: null,
    userSelected: null
  };

  getUsers(url) {
    fetch(url)
      .then(res => res.json())
      .then(json => {
        let users = json.map(user => {
          user.first_name = user.first_name.trim();
          return user;
        });

        this.setState({
          users,
          pageEnd: this.getPageEnd(users.length)
        });
      });
  }

  update({ id, first_name, last_name, status }) {
    fetch(`http://js-assessment-backend.herokuapp.com/users/${id}.json`, {
      method: "PUT",
      body: JSON.stringify({
        first_name,
        last_name,
        status
      }),
      headers: {
        "Content-type": "application/json"
      }
    })
      .then(response => response.json())
      .then(json => console.log(json))
      .catch(err => console.log(err));
  }

  add(first_name, last_name) {
    return fetch("http://js-assessment-backend.herokuapp.com/users", {
      method: "POST",
      body: JSON.stringify({
        first_name: first_name,
        last_name: last_name,
        status: "active"
      }),
      headers: {
        "Content-Type": "application/json"
      }
    });
  }

  delete(url = "http://js-assessment-backend.herokuapp.com/users/???.json") {
    fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(json => console.log(json))
      .catch(err => console.log(err));
  }

  get(url = "http://js-assessment-backend.herokuapp.com/users/???.json") {
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(json => console.log(json))
      .catch(err => console.log(err));
  }

  addUsers(url) {
    fetch(url)
      .then(res => res.json())
      .then(json => {
        let users = json.map(user => {
          user.first_name = user.first_name.trim();
          return user;
        });

        this.setState({
          users,
          pageEnd: this.getPageEnd(users.length)
        });
      });
  }

  getPageEnd(size) {
    let pageEnd =
      size <= 0 ? 0 : parseInt((9 + size) / this.props.maxUsersToDisplay);
    return pageEnd;
  }

  componentDidMount() {
    this.getUsers("http://js-assessment-backend.herokuapp.com/users");

    fetch("http://js-assessment-backend.herokuapp.com/users", {
      method: "GET"
    })
      .then(res => res.json())
      .then(json => console.log(json));

    // DEBUG
    //this.get("http://js-assessment-backend.herokuapp.com/users/354.json");
    //this.delete("http://js-assessment-backend.herokuapp.com/users/627.json");
  }

  handleToggleActivate = (id, e) => {
    let users = [...this.state.users];
    let userIdx = users.findIndex(user => user.id === id);
    let user = users[userIdx];
    user.status = user.status === "active" ? "locked" : "active";

    // call update action
    this.update(user);

    this.setState({
      users
    });
  };

  handleCreateUser = ({ firstname: first_name, lastname: last_name }) => {
    let obj = null;
    this.add(first_name, last_name)
      .then(res => res.json())
      .then(json => {
        console.log(json);
        this.setState({
          userCreated: json
        });
      })
      .catch(err => console.log("Error: ", err));
  };

  handleSelect = id => {
    console.log("handleSelect : id : " + id);

    const { users } = this.state;
    console.log(users);
    let userIndex = users.findIndex(user => user.id === id);
    const user = users[userIndex];
    console.log("handleSelect : user : ", user);

    this.setState({
      userSelectedId: id,
      userSelected: user
    });
  };

  render() {
    console.log(this.props);
    const {
      users,
      pageEnd,
      userCreated,
      userSelectedId,
      userSelected
    } = this.state;
    const { maxUsersToDisplay } = this.props;
    return (
      <React.Fragment>
        <BrowserRouter>
          <NavBar userSelectedId={userSelectedId} />
          <Switch>
            <Route
              exact
              path={["/", "/users", "/users/:page"]}
              render={props => {
                return (
                  <Show
                    {...props}
                    users={users}
                    pageEnd={pageEnd}
                    maxUsersToDisplay={maxUsersToDisplay}
                    onToggleActivate={this.handleToggleActivate}
                    onSelect={this.handleSelect}
                    userSelectedId={userSelectedId}
                  />
                );
              }}
            />
            <Route
              path="/new"
              render={props => {
                return (
                  <New
                    {...props}
                    createUser={this.handleCreateUser}
                    userCreated={userCreated}
                  />
                );
              }}
            />

            <Route
              path="/edit"
              render={props => {
                return <Edit {...props} userSelected={userSelected} />;
              }}
            />
          </Switch>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;
