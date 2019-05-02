import React, { Component } from "react";
import PropTypes from "prop-types";

class CatActions extends Component {
  state = {
    createCatName: "",
    createCatBreed: "",
    createCatAge: ""
  };

  handleTextChange = e => {
    const newState = { ...this.state };
    newState[e.target.id] = e.target.value;
    this.setState(newState);
  };

  createCat = e => {
    console.log("button clicked");
    console.log("catActions component createCat", this.state);
    e.preventDefault();
    fetch("/api/cats", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: this.state.createCatName,
        breed: this.state.createCatBreed,
        age: this.state.createCatAge
      })
    })
      // ** change text back to json (use res.text() to debug)
      .then(res => res.json())
      // .then(text => console.log(text))
      .then(result => this.props.createCat(result))
      .then(() => {
        this.setState({
          createCatName: "",
          createCatBreed: "",
          createCatAge: ""
        });
      });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.createCat}>
          <p>Name</p>
          <input
            onChange={this.handleTextChange}
            id="createCatName"
            label="Cat Name"
            value={this.state.createCatName}
          />
          <p>Breed</p>
          <input
            onChange={this.handleTextChange}
            id="createCatBreed"
            label="Breed"
            value={this.state.createCatBreed}
          />
          <p>Age</p>
          <input
            onChange={this.handleTextChange}
            id="createCatAge"
            label="Age"
            value={this.state.createCatAge}
          />
          <button type="submit">Create Cat</button>
        </form>
      </div>
    );
  }
}

CatActions.propTypes = {
  createCat: PropTypes.func
};

export default CatActions;
