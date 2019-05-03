import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

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
  <div style={{ display: "flex", justifyContent: "center" }}>
    <div style={{ display: "flexColumn", justifyContent: "center" }}>
      <h4 style={{ display: "flex", justifyContent: "center" }}>
        List of Cats
      </h4>
      {props.cats.map((cat, index) => (
        <p key={index}>
          {cat.name} &nbsp;
          <Link to={`/cats/${cat._id}`}>details</Link>
          &nbsp;{" "}
          <Button onClick={() => deleteCat(cat._id, props)} type="submit">
            Delete Cat
          </Button>
        </p>
      ))}
    </div>
  </div>
);

CatList.propTypes = {
  cats: PropTypes.array
};

export default CatList;
