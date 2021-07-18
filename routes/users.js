const router = require('express').Router();
const { validateUserPatchBody } = require('../middlewares/validations');
const { getUserInfo, updateProfile, signOut } = require('../controllers/user');

router.get('/me', getUserInfo);
router.patch('/me', validateUserPatchBody, updateProfile);
router.delete('/signout', signOut);

module.exports = router;
