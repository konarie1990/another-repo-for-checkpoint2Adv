const express = require("express");
const router = express.Router();
const CatsController = require("../controllers/cats");

// Create a route for getting all movies/Cats from the db
// This corresponds to item 1 in the controller
router.get("/", (request, response) => {
  console.log("routes get all", request);
  CatsController.getAll().then(results => response.json(results));
});

// Create a route for creating a movie
// This corresponds to item 2 in the controller
router.post("/", (request, response) => {
  console.log("routes create cat", request.body);
  CatsController.createCat(request.body).then(res => response.json(res));
});

// Create a route for deleting ONE movie by it's name
// This corresponds to item 3 in the controller
router.delete("/:id", (request, response) => {
  console.log("routes delete cat", request.params.id);
  CatsController.deleteCat(request.params.id).then(res => response.json(res));
});
// Create a route for getting ONE movie by it's id
// This corresponds to item 4 in the controller
router.get("/:_id", (request, response) => {
  console.log("routes getById", request.params._id);
  CatsController.getById(request.params._id).then(res => response.json(res));
});

module.exports = router;
