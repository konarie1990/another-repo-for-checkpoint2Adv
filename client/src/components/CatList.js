import React from "react";
import { Link } from "react-router-dom";

const deleteCat = (id, props) => {
  fetch(`/api/cats/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(res => res.json())
    .then(result => props.deleteCat(this.state.deleteCat(id)));
};

const CatList = props => (
  <div>
    <h3>List of Cats</h3>
    {props.cats.map((cat, index) => (
      <p key={index}>
        {cat.name} &nbsp;
        <Link to={`/cats/${cat._id}`}>details</Link>
        &nbsp;
        <button onClick={() => deleteCat(cat._id, props)} type="submit">
          Delete
        </button>
      </p>
    ))}
  </div>
);

export default CatList;
