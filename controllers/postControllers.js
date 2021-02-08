const Post = require('../models/Post');
const Profile = require('../models/Profile');

module.exports.get_all_posts = (req,res) => {
    Post.find().sort({date:-1}).then(posts => res.json(posts));
}

module.exports.get_single_post = (req,res) => {
    Post.findOne({_id: req.params.id}).then(post => res.json(post));
}

module.exports.get_user_posts = (req,res) => {
    Post.find({userId: req.params.userId}).sort({date:-1}).then(posts => res.json(posts));
}

module.exports.get_following_posts = async (req,res) => {
    var following_posts = [];
    var userId = req.params.userId;
    var profile = await Profile.findOne({userId});
    following_posts = await Post.find({userId});
    var following = profile.following;
    var i;
    for(i=0;i<following.length;i++){
        var iterator = following[i];
        var posts = await Post.find({userId: iterator.followingId}); 
        following_posts = following_posts.concat(posts);
    }  
    return res.json(following_posts);
}

module.exports.add_post = (req,res) => {
    const {userId, image, desc} = req.body;
    const newPost = new Post({userId, image, desc, likes: [], comments: []});
    newPost.save().then(post => res.json(post));
}

module.exports.delete_post = (req,res) => {
    Post.findByIdAndDelete({_id: req.params.id}).then(function(post){
        res.json({success: true});
    });
}
