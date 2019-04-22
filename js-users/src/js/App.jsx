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

  getPageEnd(size) {
    let pageEnd =
      size <= 0 ? 0 : parseInt((9 + size) / this.props.maxUsersToDisplay);
    return pageEnd;
  }

  componentDidMount() {
    this.getUsers("http://js-assessment-backend.herokuapp.com/users");
  }

  onToggleActivate = (id, e) => {
    let users = [...this.state.users];
    let userIdx = users.findIndex(user => user.id === id);
    let user = users[userIdx];
    user.status = user.status === "active" ? "locked" : "active";
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
