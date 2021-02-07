const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    userId: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    desc: {
        type: String,
    },
    likes: [{
        likeUser: {
            type: String,
            required: true
        }
    }],
    comments: [{
        cmntUser: {
            type: String,
            required: true
        },
        cmnt: {
            type: String,
            required: true
        },
        date: {
            type: Date,
            default: Date.now
        }
    }],
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = Post = mongoose.model('post', PostSchema);