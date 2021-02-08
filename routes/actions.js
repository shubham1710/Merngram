const { Router } = require('express');
const router = Router();
const actionController = require('../controllers/actionControllers');

router.post('/like/:userId/:postId', actionController.like);
router.post('/comment/:userId/:postId', actionController.comment);
router.delete('/comment/:postId/:commentId', actionController.delete_comment);
router.post('/follow/:followerId/:followingId', actionController.follow);

module.exports = router;