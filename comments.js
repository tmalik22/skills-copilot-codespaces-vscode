// Create web server and listen on port 3000
// Create a route that responds to POST requests to /comments
// Parse the body of the request as JSON and add the comment to the comments array
// Send back a 200 response with the comment as the body

const express = require('express');
const app = express();
const fs = require('fs');

app.use(express.json());

let comments = [];

app.post('/comments', (req, res) => {
  comments.push(req.body);
  res.status(200).json(req.body);
});

app.listengit add comments.js