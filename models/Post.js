const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'user'
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
            type: Schema.Types.ObjectId,
            ref: 'user'
        }
    }],
    comments: [{
        cmntUser: {
            type: Schema.Types.ObjectId,
            ref: 'user'
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