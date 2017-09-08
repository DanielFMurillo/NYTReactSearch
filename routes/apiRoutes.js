var express = require("express");

var articlesController = require("../controllers/articlesController");

var router = new express.Router();

// Get all articles (or optionally a specific article with an id)
router.get("/api/saved/:id?", articlesController.index);
// Create a new article using data passed in req.body
router.post("/api/saved/", articlesController.create);
// Update an existing article with a speicified id param, using data in req.body
//router.patch("/articles/:id", articlesController.update);
// Delete a specific article using the id in req.params.id
router.delete("/api/saved/:id", articlesController.destroy);

module.exports = router;
