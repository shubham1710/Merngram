const { Router } = require('express');
const router = Router();
const actionController = require('../controllers/actionControllers');
const auth = require('../middleware/auth');

router.post('like/:postId/:userId', actionController.like);
router.post('comment/:postId/:userId', actionController.comment);
router.post('follow/:followerId:/followingId', actionController.follow);

module.exports = router;