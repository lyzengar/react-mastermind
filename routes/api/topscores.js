var express = require('express');
var router = express.Router();
var topscoresCtrl = require('../../controllers/topscores');

/*---------- Protected Routes ----------*/

// TODO: Protect this route with custom middleware
router.get('/', chechAuth, topscoresCtrl.index);

function chechAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({msg: 'Not Authenticated'});
}

module.exports = router;