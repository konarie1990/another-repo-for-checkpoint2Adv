import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const deleteCat = (id, props) => {
  console.log("list component delete", id, props);
  fetch(`/api/cats/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(res => res.json())
    .then(results => props.deleteCat(id));
};

const CatList = props => (
  <div>
    <h3>List of Cats</h3>
    {props.cats.map((cat, index) => (
      <p key={index}>
        {cat.name} &nbsp;
        <Link to={`/cats/${cat._id}`}>details</Link>
        &nbsp;{" "}
        <button onClick={() => deleteCat(cat._id, props)} type="submit">
          Delete Cat
        </button>
      </p>
    ))}
  </div>
);

CatList.propTypes = {
  cats: PropTypes.array
};

export default CatList;
