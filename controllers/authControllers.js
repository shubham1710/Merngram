const User = require('../models/User');
const Profile = require('../models/Profile');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');
dotenv.config();

module.exports.signup = async (req,res) => {
    const { username, email, password } = req.body;

    if(!username || !email || !password){
        res.status(400).json({msg: 'Please enter all fields'});
    }

    User.findOne({email})
        .then(user => {
            if(user) return res.status(400).json({msg: 'User already exists'});

            const newUser = new User({ username, email, password });

            // Create salt and hash
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(password, salt, (err, hash) => {
                    if(err) throw err;
                    newUser.password = hash;
                    newUser.save()
                        .then(user => {
                            jwt.sign(
                                { id: user._id },
                                process.env.JWTSECRET,
                                { expiresIn: 3600 },
                                (err, token) => {
                                    if(err) throw err;
                                    const profile = new Profile({userId: user._id, name: user.username});
                                    await profile.save();
                                    res.json({
                                        token,
                                        user: {
                                            id: user._id,
                                            username: user.username,
                                            email: user.email
                                        }
                                    });
                                }
                            )
                        });
                })
            })
        })
}

module.exports.login = async (req,res) => {
    const { email, password } = req.body;
    if(!email || !password){
        res.status(400).json({msg: 'Please enter all fields'});
    }
    User.findOne({email})
        .then(user => {
            if(!user) return res.status(400).json({msg: 'User does not exist'});

            // Validate password
            bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if(!isMatch) return res.status(400).json({ msg: 'Invalid credentials'});

                    jwt.sign(
                        { id: user._id },
                        process.env.JWTSECRET,
                        { expiresIn: 3600 },
                        (err, token) => {
                            if(err) throw err;
                            res.json({
                                token,
                                user: {
                                    id: user._id,
                                    username: user.username,
                                    email: user.email
                                }
                            });
                        }
                    )
                })
        })
}

module.exports.get_user = (req,res) => {
    User.findById(req.user.id)
        .select('-password')
        .then(user => res.json(user));
}