const express = require('express');
const path = require('path');
const apiRoute = require('./routes/apiRoutes');
const htmlRoute = require('./routes/htmlRoutes');

const app = express();

const PORT = process.env.PORT || 3001;

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.use('/api',apiRoute);
// routes 
app.use('/',htmlRoute);


app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);

