const express = require('express');
const path = require('path');
const fs = require('fs');
const apiRoute = require('./routes/apiRoutes.js');
const htmlRoute = require('./routes/htmlRoutes.js');

const app = express();

const PORT = process.env.PORT || 3001;

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

// routes 
app.use(htmlRoute);

app.use(apiRoute);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);

