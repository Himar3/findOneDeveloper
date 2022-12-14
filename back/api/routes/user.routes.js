const router = require('express').Router()
const { checkAuth, checkRole } = require('../utils')

const {
    getOwnProfile,
    getAllUsers,
    getUserById,
    updateOwnProfile,
    deleteOwnProfile
} = require ('../controllers/user.controller')

router.get('/profile', checkAuth, getOwnProfile)
router.get('/', getAllUsers)
router.get('/:id', getUserById)
router.put('/profile', checkAuth, updateOwnProfile)
router.delete('/profile', checkAuth, deleteOwnProfile)

module.exports = router
