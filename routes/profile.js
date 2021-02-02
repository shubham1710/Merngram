const { Router } = require('express');
const router = Router();
const profileController = require('../controllers/profileControllers');

router.get('/profile/:id', profileController.get_profile);
router.get('/followers/:id', profileController.get_followers);
router.get('/following/:id', profileController.get_following);
profile.put('/profile/:id', profileController.update_profile);

module.exports = router;