const jwt = require('jsonwebtoken');
const User = require('../models/User');


module.exports = (req, res, next) => { 
  const { authorization } = req.headers;
  
  if (!authorization) {
    return res.status(401).send({ error: 'You must be logged in.' });
  }

  const token = authorization.replace('Bearer ', ''); // Remove the word Bearer from the token
  jwt.verify(token, process.env.JWT_SECRET, async (err, payload) => { // Verify the token
    if (err) {
      return res.status(401).send({ error: 'You must be logged in.' });
    }

    const { userId } = payload; // Get the user id from the token
    const user = await User.findById(userId); // Find the user by id
    req.user = user; // Add the user to the request object
    next(); // Call the next middleware
  });
}