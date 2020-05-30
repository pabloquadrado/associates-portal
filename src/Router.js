const express = require('express');

const Auth = require('./Auth');

const router = express.Router();

router.post('/login', Auth.Middleware.login, Auth.Handler.login);

module.exports = router;
