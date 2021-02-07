const { Router } = require('express');
const router = Router();
const profileController = require('../controllers/profileControllers');

router.get('/profile/:id', profileController.get_profile);
router.post('/profile/:id', profileController.update_profile);

module.exports = router;