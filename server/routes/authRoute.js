const express = require('express')
const router = express.Router()
const cors = require('cors')
const {test} = require("../controller/controller") 

router.get('/', test)
// router.post('/register', registerUser)

module.exports = router