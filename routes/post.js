const { Router } = require('express');
const router = Router();
const postController = require('../controllers/postControllers');

router.get('/explore', postController.get_all_posts);
router.get('/post/:id',postController.get_single_post);
router.get('/posts/:userId',postController.get_user_posts);
router.get('/feed/:userId', postController.get_following_posts);
router.post('/post', postController.add_post);
router.delete('/post/:id', postController.delete_post);

module.exports = router;