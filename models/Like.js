const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LikeSchema = new Schema({
    userId: {
        type: String,
        required: true
    },
    postId: {
        type: String,
        reqired: true
    }
})

module.exports = Like = mongoose.model('like', LikeSchema);