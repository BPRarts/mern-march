const Joke = require('../models/joke.model');
 
module.exports.findAllJokes= (req, res) => {
    Joke.find()
        .then((allJokes) => {
            res.json({ jokes: allJokes })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}

module.exports.createJoke = (req,res) => {
    Joke.create(req.body)
    .then((newJoke)=> {
        res.json({joke:newJoke})
    })
    .catch((err) => {
        res.json({ message: 'Something went wrong', error: err })
    });

}
