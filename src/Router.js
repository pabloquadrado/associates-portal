const express = require('express');

const AuthHandler = require('./Handler/Auth');
const AuthMiddleware = require('./Middleware/Auth');

const router = express.Router();

router.post('/login', AuthMiddleware.login, AuthHandler.login);

module.exports = router;
