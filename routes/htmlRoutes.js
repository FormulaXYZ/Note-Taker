const path = require('path');
const router = require('express').Router();
 
// Route for home page
router.get('/notes', (req, res) =>
res.sendFile(path.join(__dirname,'../public/notes.html')) 
);
 
// Route for note
router.get('*', (req, res) =>
res.sendFile(path.join(__dirname,'../public/index.html')) 
);

module.exports = router;