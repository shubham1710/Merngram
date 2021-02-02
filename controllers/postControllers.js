const Post = require('../models/Post');
const Profile = require('../models/Profile');
const User = require('../models/User');

module.exports.get_all_posts = (req,res) => {
    Post.find().sort({date:-1}).then(posts => res.json(posts));
}

module.exports.get_single_post = (req,res) => {
    Post.find({_id: req.params.id}).sort({date:-1}).then(posts => res.json(posts));
}

module.exports.get_user_posts = (req,res) => {
    Post.find({userId: req.params.userId}).sort({date:-1}).then(posts => res.json(posts));
}

module.exports.get_following_posts = (req,res) => {
    const following_posts = [];
    const userId = req.params.userId;
    const profile = Profile.findOne({userId});
    const following = profile.following;
    // following.forEach(user => {
    //     Post.find({userId: user.follwingId}).sort({date:-1}).then(posts => following_posts = [...following_posts, ...posts]);
    // });
    return res.json(following_posts);
}

module.exports.add_post = (req,res) => {
    const newPost = new Post(req.body);
    newPost.save().then(post => res.json(post));
}

module.exports.update_post = (req,res) => {
    Post.findByIdAndUpdate({_id: req.params.id},req.body).then(function(post){
        Post.findOne({_id: req.params.id}).then(function(post){
            res.json(post);
        });
    });
}

module.exports.delete_post = (req,res) => {
    Post.findByIdAndDelete({_id: req.params.id}).then(function(post){
        res.json({success: true});
    });
}
