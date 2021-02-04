const Profile = require('../models/Profile');
const Post = require('../models/Post');

module.exports.like = async (req,res) => {
    const userId = req.params.userId;
    const postId = req.params.postId;
    try{
        var post = await Post.findOne({_id: postId});
        if(post.likes){
            let likeIndex = post.likes.findIndex(p => p.likeUser == userId);
            
            // if post is already liked
            if(likeIndex > -1){
                post.likes.splice(likeIndex,1);
            }
            // create a new like
            else{
                post.likes.push({likeUser: userId});
            }
        }
        else{
            post.likes = [{likeUser: userId}];
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
    const postId = req.params.postId;
    const {cmnt} = req.body;
    var post = await Post.findOne({_id: postId});
    if(post.comments){
        post.comments.push({cmntUser: userId, cmnt: cmnt});
    }
    else{
        post.comments = [{cmntUser: userId, cmnt: cmnt}];
    }
    post = await post.save();
    return res.json({success: true});
}

module.exports.delete_comment = async (req,res) => {
    const postId = req.params.postId;
    const commentId = req.params.commentId;
    var post = await Post.findOne({_id: postId});
    let cmntIndex = post.comments.findIndex(p => p._id == commentId);
    if(cmntIndex > -1)
    {
        post.comments.splice(cmntIndex,1);
    }
    post = await post.save();
    return res.json({success: true});
}

module.exports.follow = async (req,res) => {
    const follower = req.params.followerId;
    const following = req.params.followingId;
    try{
        var follower_profile = await Profile.findOne({userId: follower});
        var following_profile = await Profile.findOne({userId: following});

        // add the person to following list of the follower
        if(follower_profile.following){
            let followingIndex = follower_profile.following.findIndex(p => p.followingId == following);

            // if user is already followed
            if(followingIndex > -1){
                follower_profile.following.splice(followingIndex,1);
            }
            // user is not followed
            else{
                follower_profile.following.push({followingId: following});
            }
        }
        else{
            follower_profile.following = [{followingId: following}];
        }

        // add the following person to follower list
        if(following_profile.followers){
            let followerIndex = following_profile.followers.findIndex(p => p.followerId == follower);

            // if user is already a follwer
            if(followerIndex > -1){
                following_profile.followers.splice(follwerIndex,1);
            }
            // user is not a follower
            else{
                following_profile.followers.push({followerId: follower});
            }
        }
        else{
            following_profile.followers = [{followerId: follower}];
        }

        follower_profile = await follower_profile.save();
        following_profile = await following_profile.save();
        return res.json({success: true});
    }
    catch (err) {
        console.log(err);
        res.status(500).send("Something went wrong");
    }
}