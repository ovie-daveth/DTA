const mongoose = require('mongoose');
const {Schema} = mongoose

const userSchema = new Schema({
    name: String,
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true,
    },
    imgUrl: {
        type: String,
    },
    location: {
        type: String,
        default: ''
    },
    bio:  {
        type: String,
        default: ''
    },
    portfolio: {
        type: String,
        default: ''
    },
    link: {
        type: {
          facebook: {
            type: String,
            default: ''
          },
          twitter: {
            type: String,
            default: ''
          },
          linkedin: {
            type: String,
            default: ''
          }
        },
        default: {}
      }
},
{
    timestamps: true,
});

const UserModel = mongoose.model('user', userSchema)
module.exports = UserModel