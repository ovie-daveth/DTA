const UserModel = require("../model/userModel")
const bcrypt = require("bcrypt");
require("dotenv").config();
const jwt = require("jsonwebtoken");


const secretKey = process.env.JWT_SECRET;

const createToken = async (res, _id) => {
  try {
    const payload = { _id };
    const token = await jwt.sign(payload, secretKey, { expiresIn: '14d' });

    res.cookie("jwt_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== 'development',
      sameSite: 'strict',
      //sameSite: 'lax',
      maxAge: 14 * 24 * 60 * 60 * 1000
    });

  } catch (error) {
    console.error('Error creating token:', error);
    // Handle the error gracefully (e.g., return an error response or redirect to an error page)
    throw error;
  }
};




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

        await createToken(res, user._id)
        res.status(200).json({ success: "Registered successfully"})
    }
        
    } catch (error) {
        console.log(error)
    };
}
const loginUser = async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await UserModel.findOne({ email });
  
      if (!user) {
        res.json({
          error: 'User not found',
        });
      } else {
        const passwordMatch = await new Promise((resolve, reject) => {
          bcrypt.compare(password, user.password, (err, result) => {
            if (err) {
              reject(err);
            } else {
              resolve(result);
            }
          });
        });
  
        if (passwordMatch) {
          await createToken(res, user._id);
          res.status(200).json({ success: "Login successful" });
        } else {
          res.status(404).json({
            error: 'Password mismatch',
          });
        }
      }
    } catch (error) {
      console.error(error);
      // Handle the error gracefully (e.g., return an error response or redirect to an error page)
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  
const getProfile = (req, res) => {
    const user = {
        _id: req.user._id,
        name: req.user.name,
        email: req.user.email,
        location: req.user.location,
        bio: req.user.bio,
        facebook: req.user.link.facebook,
        twitter: req.user.link.twitter,
        linkedin: req.user.link.linkedin,
        portfolio: req.user.portfolio,
        joined: req.user.createdAt,
        lastupdate: req.user.updatedAt,
    }
    console.log(user)
    res.status(200).json(user)
}
const updateProfile = async (req, res) => {
    const user = await UserModel.findById(req.user._id);

    if (user) {
        user.name = req.body.name || user.name;
        user.email = req.body.email || user.email;
        user.location = req.body.location || user.location;
        user.imgUrl = req.body.imgUrl || user.imgUrl;
        user.bio = req.body.bio || user.bio;
        user.portfolio = req.body.portfolio || user.portfolio;
        user.link.facebook = req.body.link?.facebook || user.link.facebook;
        user.link.twitter = req.body.link?.twitter || user.link.twitter;
        user.link.linkedin = req.body.link?.linkedin || user.link.linkedin;

        if(req.body.password){
            const hashedPassword = await bcrypt.hash(req.body.password, 10);
            user.password = hashedPassword;
        }

        const updatedUser = await user.save()
        res.status(200).json(updatedUser)
    } else{
        res.status(404).json({error: 'User not found'})
    }
}
const logoutUser = (req, res) => {
    res.cookie('jwt_token', '', {
        httpOnly: true,
        expires: new Date(0)
    })
    res.status(201).json({message: "user logged out"})
}



module.exports = {
    test,
    registerUsers,
    loginUser,
    getProfile,
    updateProfile,
    logoutUser
}