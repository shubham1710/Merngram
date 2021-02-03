const Profile = require('../models/Profile');
const Post = require('../models/Post');

module.exports.like = async (req,res) => {
    const userId = req.params.userId;
    const {postId} = req.body;
    try{
        const post = await Post.findOne({_id: postId});
        let likeIndex = post.likes.findIndex(p => p.likeUser == userId);
        
        // if post is already liked
        if(likeIndex){
            post.likes.splice(likeIndex,1);
        }
        // create a new like
        else{
            post.likes.push({likeUser: userId});
        }
        post = await post.save();
        return res.json({success: true});
    }
    catch (err) {
        console.log(err);
        res.status(500).send("Something went wrong");
    }
}

module.exports.comment = async (req,res) => {
    const userId = req.params.userId;
    const {postId, cmnt} = req.body;
    const post = await Post.findOne({_id: postId});
    post.comments.push({cmntUser: userId, cmnt: cmnt});
    post = await post.save();
    return res.json({success: true});
}

module.exports.follow = async (req,res) => {
    const follower = req.params.followerId;
    const {following} = req.body;
    try{
        const profile = await Profile.findOne({_id: follower});
        let follwingIndex = profile.following.findIndex(p => p.followingId == following);

        // if user is already followed
        if(follwingIndex > -1){
            profile.following.splice(follwingIndex,1);
        }
        // user is not followed
        else{
            profile.following.push({followingId: following});
        }
        profile = await profile.save();
        return res.json({success: true});
    }
    catch (err) {
        console.log(err);
        res.status(500).send("Something went wrong");
    }
}