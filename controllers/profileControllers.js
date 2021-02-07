const Profile = require('../models/Profile');

module.exports.get_profile = (req,res) => {
    Profile.findOne({userId: req.params.id}).then(profile => res.json(profile));
}

module.exports.update_profile = async (req,res) => {
    const profile = await Profile.findOne({userId: req.params.id});
    const {name, bio, pic} = req.body;
    if(profile){
        profile.name = name;
        profile.bio = bio;
        profile.pic = pic;
        profile = await profile.save();
        return res.json(profile);
    }
    else{
        res.status(500).send('Something went wrong');
    }
}
