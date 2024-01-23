const express = require('express');
const User = require('../models/User');
const jwt = require('jsonwebtoken');

const router = express.Router();

router.post('/signup', async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = new User({ email, password });
    await user.save();


    const token = jwt.sign({userId:user._id},process.env.JWT_SECRET);

    res.send({token});
  } catch (error) {
   
    return res.status(422).send(error.message);
  }
});


router.post('/signin', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password){
      return res.status(422).send({error:'Must provide email and password'});
    }

    const user = await User.findOne({email});
    if (!user){
      return res.status(422).send({error:'Invalid password or email'});
    }

    const isMatch = await user.matchPassword(password);
    if (!isMatch) {
      return res.status(422).send({error:'Invalid password or email'});
    }

    const token = jwt.sign({userId:user._id},process.env.JWT_SECRET);

    res.send({token});
  } catch (error) {
    return res.status(422).send({error:'Invalid password or email'});
  }
});

module.exports = router;