import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import uuid from "uuid";

class Pagination extends Component {
  calcPageNumbers = (page, pageEnd) => {
    let indexes = [1, 2, 3, 4, 5];

    if (pageEnd <= 0) {
      return null;
    }

    if (page >= pageEnd - 2) {
      let pageStart = pageEnd - 4;
      indexes = indexes.map(() => pageStart++);
    } else if (page >= 4) {
      let pageStart = page - 2;
      indexes = indexes.map(() => pageStart++);
    }

    indexes = indexes.map(index => {
      return (
        <li key={uuid.v4()}>
          <NavLink to={"/users/" + index}>{index}</NavLink>
        </li>
      );
    });

    return indexes;
  };

  render() {
    const { page, pageEnd } = this.props;
    return (
      <div className="paginate-list">
        <ul>
          <li key={uuid.v4()}>
            <NavLink to={"/users/1"}>First</NavLink>
          </li>
          {this.calcPageNumbers(page, pageEnd)}
          <li key={uuid.v4()}>
            <NavLink to={"/users/" + pageEnd}>Last</NavLink>
          </li>
        </ul>
      </div>
    );
  }
}

export default Pagination;
