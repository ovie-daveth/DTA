const UserModel = require("../model/userModel")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const test = (req, res) => {
    res.json("test is working")
}

const registerUsers = async (req, res) => {
    try {
        const {name, email, password} = req.body
        const exist = await UserModel.findOne({email});

        const isValidEmail = (email) => {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
          };

        if(!name){
            res.json({
                error: "Name is required"
        })
        } else if(!isValidEmail(email)){
            res.json({
                error: "Invalid Email address"
            })
        } else if(!password){
            res.json({
                error: "Password is required"
            })
        }else if(password.length < 6){
            res.json({
                error: "Password is too short: At least 7 character"
            })
        }else if(exist){
            res.json({
                error: "Email is taken already"
            })
        }else {
            const hashedPassword = await bcrypt.hash(password, 10);
            const user = await UserModel.create({
            name,
            email,
            password: hashedPassword
        })
        res.json({
            success: 'Registered Successfully',
            user: user
        })
    }
        
    } catch (error) {
        console.log(error)
    };
}

const loginUser =  async(req, res) => {
    try {
        const {email, password} = req.body;
        const user = await UserModel.findOne({email});
        if(!user){
            res.json({
                error: 'User not found',
            })
        } else{
            bcrypt.compare(password, user.password, (err, result) => {
                if (err) {
                    // Handle error
                    console.error(err);
                    return;
                } else if (result){
                    console.log("username", user.name)
                    jwt.sign({email: user.email, id: user._id, name: user.name}, process.env.JWT_SECRET, {}, (err, token) => {
                        if (err) {
                            console.error(err);
                            return;
                          }
                          console.log("reached");
                          res.cookie('token', token).json({ success: "Correct Password", token: token });
                          console.log("The token", token);
                    })
                    res.json({
                        success: "Correct Password"
                    })
                } else {
                    res.json({
                        error: 'Password mismatch'
                    })
                }
            })
        }
        
    } catch (error) {
        
    }
}
const profile = async (req, res) => {
    const token = req.cookies
    if(token){
        jwt.verify(token, process.env.JWT_SECRET, {}, (err, user) => {
            if(err){
                console.log(err)
            } else{
                res.json(user)
            }
        })
    }
}

module.exports = {
    test,
    registerUsers,
    loginUser,
    profile,
}