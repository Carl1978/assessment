import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Show from "./components/layout/Show";
import New from "./components/layout/New";
import Edit from "./components/layout/Edit";

class App extends Component {
  state = {
    users: [],
    pageEnd: 0
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
      .then(json => console.log(json));
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

    // fetch("http://js-assessment-backend.herokuapp.com/users/620.json", {
    //   method: "PUT",
    //   body: JSON.stringify({
    //     first_name: "JANE1234",
    //     last_name: "doe",
    //     status: "active"
    //   }),
    //   headers: {
    //     "Content-type": "application/json"
    //   }
    // })
    //   .then(response => response.json())
    //   .then(json => console.log(json));

    // fetch("http://js-assessment-backend.herokuapp.com/users", {
    //   method: "POST",
    //   body: JSON.stringify({
    //     first_name: "Jim",
    //     last_name: "Doe",
    //     status: "active"
    //   }),
    //   headers: {
    //     "Content-Type": "application/json"
    //   }
    // })
    //   .then(res => res.json())
    //   .then(json => console.log(json))
    //   .catch(e => console.log(e));

    // fetch("http://js-assessment-backend.herokuapp.com/users/622.json", {
    //   method: "DELETE",
    //   headers: {
    //     "Content-Type": "application/json"
    //   }
    // })
    //   .then(res => res.json())
    //   .then(json => console.log(json));

    //   fetch("http://js-assessment-backend.herokuapp.com/users/622.json", {
    //     method: "DELETE",
    //     headers: {
    //       "Content-Type": "application/json"
    //     }
    //   })
    //     .then(res => res.json())
    //     .then(json => console.log(json));
  }

  onToggleActivate = (id, e) => {
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

  render() {
    const { users, pageEnd } = this.state;
    const { maxUsersToDisplay } = this.props;
    return (
      <React.Fragment>
        <BrowserRouter>
          <NavBar />
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
                    onToggleActivate={this.onToggleActivate}
                  />
                );
              }}
            />
            <Route path="/new" component={New} />
            <Route path="/edit" component={Edit} />
          </Switch>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;
