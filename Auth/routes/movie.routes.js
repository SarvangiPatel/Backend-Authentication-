
const express = require('express');
const moviecontroller = require('../controllers/movie.controller');
const CheckIsAuth = require('../middlewares/auth');

const movieRouter = express.Router()

movieRouter.get("/movie",CheckIsAuth,moviecontroller.movies)
movieRouter.get("/series",moviecontroller.series)


module.exports = movieRouter