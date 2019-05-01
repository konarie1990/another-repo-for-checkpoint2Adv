import React, { Component } from "react";

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
      .then(res => res.json())
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
          <input
            onChange={this.handleTextChange}
            id="createCatName"
            label="Cat Name"
            value={this.state.createCatName}
            variant="outlined"
          />
          <input
            onChange={this.handleTextChange}
            id="createCatBreed"
            label="Breed"
            value={this.state.createCatBreed}
            variant="outlined"
          />
          <input
            onChange={this.handleTextChange}
            id="createCatAge"
            label="Age"
            value={this.state.createCatAge}
            variant="outlined"
          />
          <button type="submit" variant="contained">
            Create Cat
          </button>
        </form>
      </div>
    );
  }
}

export default CatActions;
