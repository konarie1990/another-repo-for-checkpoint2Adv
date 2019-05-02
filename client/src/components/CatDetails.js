import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

class CatDetails extends Component {
  state = {
    cat: {}
  };

  componentDidMount() {
    console.log("mounted", this.props);
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

CatDetails.propTypes = {
  match: PropTypes.object
};

export default CatDetails;
