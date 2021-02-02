const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const dotenv = require('dotenv');
dotenv.config();

const ProfileSchema = ({
    userId: {
        type: String,
        required: true
    },
    name: {
        type: String
    },
    bio: {
        type: String,
        default: ''
    },
    pic: {
        type: String,
        default: process.env.DEFAULT_IMAGE
    },
    followers: [{
        followerId: {
            type: String,
            required: true
        }
    }],
    following: [{
        followingId: {
            type: String,
            required: true
        }
    }],
})

module.exports = Profile = mongoose.model('profile', ProfileSchema);