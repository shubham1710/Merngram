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
    const following_posts = [];
    const userId = req.params.userId;
    const profile = await Profile.findOne({userId});
    const following = profile.following;
    // following.forEach(user => {
    //     Post.find({userId: user.follwingId}).sort({date:-1}).then(posts => following_posts = [...following_posts, ...posts]);
    // });
    return res.json(following_posts);
}

module.exports.add_post = (req,res) => {
    const {userId, image, desc} = req.body;
    const newPost = new Post({userId, image, desc, likes: [], comments: []});
    newPost.save().then(post => res.json(post));
}

module.exports.update_post = async (req,res) => {
    const post = await Post.findOne({_id: req.params.id});
    const {image, desc} = req.body;
    if(post){
        post.image = image;
        post.desc = desc;
        post = await post.save();
        return res.json(post);
    }
    else{
        res.status(500).send('Something went wrong');
    }
}

module.exports.delete_post = (req,res) => {
    Post.findByIdAndDelete({_id: req.params.id}).then(function(post){
        res.json({success: true});
    });
}
