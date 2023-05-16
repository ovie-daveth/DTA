const jwt = require('jsonwebtoken')
const UserModel = require('../model/userModel')

const protect =async (req, res, next) => {
    let token = req.cookies.jwt_token

    if(token){
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            req.user = await UserModel.findById(decoded._id).select("-password");
            next()
        } catch (error) {
            res.status(401).json({ error: "Invalid JWT token"})
        }

    } else{
        res.status(403).json({error:"Not authorized to access"})
    }
}

module.exports = protect