const express = require('express');
const router = express.Router();
const { authJwt } = require("../middlewares");
const controller = require("../controllers/UserController.js");

router.use(function(req, res, next) {
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, Content-Type, Accept"
  );
  next();
});

router.get("/all", controller.allAccess);

router.get(
  "/user",
  [authJwt.verifyToken],
  controller.userBoard
);

router.get(
  "/employer",
  [authJwt.verifyToken, authJwt.isEmployer],
  controller.employerBoard
);

router.get(
  "/admin",
  [authJwt.verifyToken, authJwt.isAdmin],
  controller.adminBoard
);

module.exports = router;
