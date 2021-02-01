const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProfileSchema = ({
    userId: {
        type: String,
        required: true
    },
    name: {
        type: String
    },
    bio: {
        type: String
    },
    pic: {
        type: String
        // default profile pic url to be added here
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