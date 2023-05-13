// router file
const express = require("express");
const router = express.Router();
const { test, registerUsers, loginUser, profile } = require("../controller/controller");

router.get("/", test);

// router.post("/register", registerUsers)
router.get("/", test);
router.post("/register", registerUsers);
router.post("/login", loginUser)
router.get("/profile", profile)

module.exports = router;
