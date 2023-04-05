const User = require('../models/tvshow.model');
 
module.exports.findAllShows = (req, res) => {
    Show.find()
        .then((allShows) => {
            res.json({ shows: allShows })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}