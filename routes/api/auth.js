const express = require('express');
const { ctrlWrapper } = require('../../helpers');
const { validateBody, authenticate } = require('../../middlewares');
const { schemas } = require('../../models/user');
const { register, login, getCurrent, logout } = require('../../controllers/auth');

const router = express.Router();

// signup
router.post('/register', validateBody(schemas.registerSchema), ctrlWrapper(register));

// signin
router.post('/login', validateBody(schemas.loginSchema), ctrlWrapper(login));

router.get('/current', authenticate, ctrlWrapper(getCurrent));

router.get('/logout', authenticate, ctrlWrapper(logout));

module.exports = router;
