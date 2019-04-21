import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

describe("App.getPageEnd", () => {
  it("should calculate the page end number based on the max number of users.", () => {
    let app = new App({ maxUsersToDisplay: 10 });

    expect(app.getPageEnd(1)).toBe(1);
    expect(app.getPageEnd(11)).toBe(2);
    expect(app.getPageEnd(18)).toBe(2);
    expect(app.getPageEnd(303)).toBe(31);
    expect(app.getPageEnd(0)).toBe(0);
    // expect(app.getPageEnd(-1)).toBe(0);
  });
});
