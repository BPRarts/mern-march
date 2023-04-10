const JokeController = require('../controllers/joke.controllers');


module.exports = app => {
    app.get('/api/allJokes', JokeController.findAllJokes);
    app.post('/api/newJoke', JokeController.createJoke);
    app.get('/api/oneJoke/:id', JokeController.findOneJoke);
    app.put('/api/updateJoke/:id',JokeController.updateJoke);
    app.delete('/api/deleteJoke/:id', JokeController.deleteJoke);
}