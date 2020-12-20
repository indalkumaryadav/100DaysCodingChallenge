import React, { Component } from "react";

export default class Home extends Component {
  state = {
    users: [
      { id: 1, name: "indal", password: "indal" },
      { id: 2, name: "indal", password: "indal" },
      { id: 3, name: "indal", password: "indal" },
      { id: 4, name: "indal", password: "indal" },
      { id: 5, name: "indal", password: "indal" },
    ],
  };
  render() {
    return (
      <div>
        <h1>ID: {this.state.users[0].id}</h1>
        <h1>Name: {this.state.users[0].name}</h1>
        <h1>Password: {this.state.users[0].password}</h1>

        <h1>Using Map Function</h1>

        {this.state.users.map((user) => (
          <h1 key={user.id}>
            Name:- {user.name} Password:- {user.password}
          </h1>
        ))}
      </div>
    );
  }
}
