const express = require('express');
const Track = require('../models/Track');
const requireAuth = require('../middlewares/requireAuth');


const router = express.Router();

router.use(requireAuth);

router.get('/tracks', async (req, res) => {
    const tracks = await Track.find({userId:req.user._id});
    res.send(tracks);
});

router.post('/tracks', async (req, res) => { 
    const { name, locations } = req.body;
    
    if(!name || !locations){
        return res.status(422).send({error:'You must provide a name and locations'});
    }
    try{
        const track = new Track({name, locations, userId:req.user._id});
        await track.save();
        res.send(track);
    } catch (err) {
        console.log(err);
        res.status(500).send({error:err.message});
    }
}); 


module.exports = router;