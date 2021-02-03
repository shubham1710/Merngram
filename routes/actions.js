const { Router } = require('express');
const router = Router();
const actionController = require('../controllers/actionControllers');

router.post('like/:userId', actionController.like);
router.post('comment/:userId', actionController.comment);
router.post('follow/:followerId', actionController.follow);

module.exports = router;