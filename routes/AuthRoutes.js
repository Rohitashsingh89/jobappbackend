const express = require('express');
const router = express.Router();
const { verifySignUp } = require('../middlewares');
const controller = require('../controllers/AuthController.js');

// CORS Middleware
router.use(function(req, res, next) {
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, Content-Type, Accept'
  );
  next();
});

// Register Route (Assuming this is a separate registration route)
router.post(
  '/register',
  [
    verifySignUp.checkDuplicateUsernameOrEmail,
    verifySignUp.checkRolesExisted
  ],
  controller.signup
);

// Signin Route
router.post('/login', controller.signin);

// Signout Route
router.post('/logout', controller.signout);

module.exports = router;
