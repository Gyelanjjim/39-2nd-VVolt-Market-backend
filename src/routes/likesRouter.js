const express = require('express');
const likeRouter = express.Router();
const likeController = require('../controllers/likeController');
const { checkAuth } = require('../utils/checkAuth');

likeRouter.post('', likeController.createLikeByUsername);
likeRouter.get('/:userId', likeController.getLikeByusername);
likeRouter.post('/:productId', checkAuth, likeController.postLike);

module.exports = { likeRouter };
