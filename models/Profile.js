const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const dotenv = require('dotenv');
dotenv.config();

const ProfileSchema = ({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'user'
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
            type: Schema.Types.ObjectId,
            ref: 'user'
        }
    }],
    following: [{
        followingId: {
            type: Schema.Types.ObjectId,
            ref: 'user'
        }
    }],
})

module.exports = Profile = mongoose.model('profile', ProfileSchema);