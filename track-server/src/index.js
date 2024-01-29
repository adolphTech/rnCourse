require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const authRoutes = require('./routes/authRoutes');
const trackRoutes = require('./routes/trackRoutes');
const requireAuth = require('./middlewares/requireAuth');
// const ngrok = require('@ngrok/ngrok');

app.use(express.json()); // Make sure it comes back as json
app.use(express.urlencoded({ extended: true }));
app.use(authRoutes);
app.use(trackRoutes);
const PORT = process.env.PORT
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const cluster = process.env.DB_CLUSTER;
const dbname = process.env.DB_NAME;
// const ngrokAuth = process.env.NGROK_AUTH_TOKEN;



const mongoUri = `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbname}?retryWrites=true&w=majority`;

mongoose.connect(mongoUri);

mongoose.connection.on('connected', () => {
  console.log('Connected to mongo instance');
});

mongoose.connection.on('error', (err) => {
  console.error('Error connecting to mongo', err);
});

app.get('/', requireAuth, (req, res) => {
  res.send(`Your email: ${req.user.email}`);
});

app.listen(PORT, async () => {
    console.log(`App listening on port ${PORT}`);
  
    // Start ngrok and create a tunnel to port 3000
    // const listener = await ngrok.connect({ addr: 8000, authtoken: process.env.NGROK_AUTH_TOKEN });
    // console.log(`ngrok tunnel created at url`, listener.url());
  });
