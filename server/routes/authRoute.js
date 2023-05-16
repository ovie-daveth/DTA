// router file
const express = require("express");
const router = express.Router();
const { test, 
    registerUsers, 
    loginUser,
    getProfile,
    updateProfile,
    logoutUser} = require("../controller/controller");
const protect = require("../middlewares/authmiddleware")

router.get("/", test); 


// router.post("/register", registerUsers)
router.get("/", test);
router.post("/register", registerUsers); //to recieve register info from client
router.post("/login", loginUser) //to receive login detail and  validate from client
router.post('/logout', logoutUser)
router.route("/profile").get(protect, getProfile).put(protect, updateProfile);

module.exports = router;
