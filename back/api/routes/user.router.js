const router = require('express').Router()
const { checkAuth, checkRole } = require('../utils')

const {
    getOwnProfile,
    getAllUsers,
    getUserById,
    deleteOwnProfile
} = require ('../controllers/user.controller')

router.get('/self',  checkAuth,getOwnProfile)
router.get('/', checkAuth, getAllUsers)
router.get('/:id', checkAuth, getUserById)
router.delete('/', checkAuth, deleteOwnProfile)

module.exports = router
