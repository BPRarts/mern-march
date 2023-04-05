const TvShowController = require('../controllers/tvshow.controller');

module.esports = app => {
    app.get('/api/allShows', TvShowController,TvShowController.findAllShows);
}