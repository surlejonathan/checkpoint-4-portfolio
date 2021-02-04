const express = require("express");
const router = express.Router();
const connection = require("../config");

// CREATE PROJECT

router.post("/", (req, res) => {
  const sql = "INSERT INTO project SET ?";
  const data = {
    project_name: req.body.project_name,
    project_picture: req.body.project_picture,
    project_presentation: req.body.project_presentation,
  };
  return connection.query(sql, data, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message, sql: err.sql });
    } else {
      return res.status(201).json(result);
    }
  });
});

// GET LIST OF PROJECTS

router.get("/", (req, res) => {
  const sql = "SELECT * FROM project";
  connection.query(sql, (err, results) => {
    if (err) {
      res.status(500).json(err.message);
    } else if (results.length === 0) {
      res
        .status(404)
        .json("No projects were found yet. Please try again later...");
    } else {
      res.status(200).json(results);
    }
  });
});

module.exports = router;
