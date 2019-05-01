import React, { Component } from "react";
import CatList from "../containers/CatList";
import CatActions from "../containers/CatActions";

class Home extends Component {
  componentDidMount() {
    fetch("/api/cats")
      .then(res => res.json())
      .then(cats => this.props.listCats(cats))
      .catch(() => this.props.listCats([]));
  }

  render() {
    return (
      <div>
        <div>
          <h1>Cats</h1>
        </div>
        <div>
          <div>
            <CatList />
            <CatActions />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
