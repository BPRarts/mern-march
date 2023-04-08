const JokeController = require('../controllers/joke.controllers');


module.exports = app => {
    app.get('/api/allJokes', JokeController.findAllJokes);
    app.post('/api/newJoke', JokeController.createJoke);
}