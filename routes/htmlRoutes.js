const path = require('path');
const router = require('express').router();

router.get('/', (req, res) =>
res.sendFile(path.join(__dirname,'..public/index.html')) 
);
 