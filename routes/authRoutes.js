const express = require("express");
const { register, login } = require("../controller/auth");

const router = express.Router();

// Defining the routes for the auth routes
router.post("/register", register);
router.post("/login", login);

module.exports = router;
