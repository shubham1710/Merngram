const { Router } = require('express');
const router = Router();
const postController = require('../controllers/postControllers');

router.get('/posts', postController.get_posts);
router.post('/post', postController.add_post);
router.put('/post/:id', postController.update_post);
router.delete('/post/:id', postController.delete_post);

module.exports = router;