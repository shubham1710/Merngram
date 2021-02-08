const Profile = require('../models/Profile');

module.exports.get_profile = (req,res) => {
    Profile.findOne({userId: req.params.id}).then(profile => res.json(profile));
}

module.exports.update_profile = async (req,res) => {
    Profile.findOneAndUpdate({userId: req.params.id},req.body).then(function(profile){
        Profile.findOne({userId: req.params.id}).then(function(profile){
            res.json(profile);
        });
    });
}
