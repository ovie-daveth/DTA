// router file
const express = require("express");
const router = express.Router();
const { test, registerUsers, loginUser, profile } = require("../controller/controller");

router.get("/", test); 

// router.post("/register", registerUsers)
router.get("/", test);
router.post("/register", registerUsers); //to recieve register info from client
router.post("/login", loginUser) //to receive login detail and  validate from client
router.get("/profile", profile) //to display the profile to client

module.exports = router;
