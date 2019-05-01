import React, { Component, Fragment } from "react";

class CatDetails extends Component {
  state = {
    cat: {}
  };

  componentDidMount() {
    const catId = this.props.match.params.id;
    fetch(`/api/cats/${catId}`)
      .then(res => res.json())
      .then(cat => this.setState({ cat }));
  }

  render() {
    return (
      <Fragment>
        <div>
          <h1>Cat</h1>
        </div>
        <div>
          {this.state.cat.name && (
            <div>
              <h4>Cat Name: {this.state.cat.name}</h4>
              <h4>Breed: {this.state.cat.breed}</h4>
              <h4>Age: {this.state.cat.age}</h4>
            </div>
          )}
        </div>
      </Fragment>
    );
  }
}

export default CatDetails;
