const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    userId: {
        type: String,
        required: true
    },
    postId: {
        type: String,
        reqired: true
    },
    cmnt: {
        type: String,
        required: true
    }
})

module.exports = Comment = mongoose.model('comment', CommentSchema);