const { Router } = require('express');
const router = Router();
const actionController = require('../controllers/actionControllers');

router.post('/like/:userId/:postId', actionController.like);
router.post('/comment/:userId/:postId', actionController.comment);
router.post('/follow/:followerId/:followingId', actionController.follow);

module.exports = router;