const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const { upload, updateProfilePic, getProfile } = require('../controllers/userController');

router.put('/profile-pic', auth, upload, updateProfilePic);
router.get('/me', auth, getProfile);

module.exports = router;
