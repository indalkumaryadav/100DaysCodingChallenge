import React, { Component } from "react";
import axios from "axios";

export default class AddBook extends Component {
  state = {
    title: "",
    author: "",
    price: null,
    rating: null,
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault(e.target.value);
    console.log(this.state);
    axios.post("http://127.0.0.1:8000/api/book/", this.state).then(
      (response) => {
        console.log(response);
        if (response.status === 201) {
          alert("Form Submitted !");
        }
      },
      (error) => {
        console.log(error);
      }
    );
  };
  render() {
    const { title, author, price, rating } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h2>Add Book</h2>
          Title:{" "}
          <input
            type="text"
            name="title"
            value={title}
            onChange={this.handleChange}
          />
          <br />
          <br />
          Author{" "}
          <input
            type="text"
            name="author"
            value={author}
            onChange={this.handleChange}
          />
          <br />
          <br />
          Author{" "}
          <input
            type="number"
            name="price"
            value={price}
            onChange={this.handleChange}
          />
          <br />
          <br />
          Author{" "}
          <input
            type="number"
            name="rating"
            value={rating}
            onChange={this.handleChange}
          />
          <br />
          <br />
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}
