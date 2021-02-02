const Profile = require('../models/Profile');
const Like = require('../models/Like');
const Comment = require('../models/Comment');

module.exports.like = async (req,res) => {
    const userId = req.params.userId;
    const postId = req.params.postId;
    try{
        const like = await Like.findOne({userId, postId});
        
        // if post is already liked
        if(like){
            const unlike = await Like.findByIdAndDelete({_id: like._id});
            return res.json({status: 'unlike'});
        }
        // create a new like
        else{
            const newLike = await Like.create({userId, postId});
            return res.json({status: 'like'});
        }
    }
    catch (err) {
        console.log(err);
        res.status(500).send("Something went wrong");
    }
}

module.exports.comment = async (req,res) => {
    const userId = req.params.userId;
    const postId = req.params.postId;
    const {cmnt} = req.body;
    const comment = await Comment.create({userId, postId, cmnt});
    return res.json(comment);
}

module.exports.follow = async (req,res) => {
    const follower = req.params.followerId;
    const following = req.params.followingId;
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