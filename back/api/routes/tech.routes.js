const router = require('express').Router()
const { checkAuth, checkRole } = require('../utils')

const {
    getAllTechs,
    addTechToUser,
    getTechByUserId,
    addTechToProject,
    createTechDefault
} = require ('../controllers/tech.controller')

router.post('/create', createTechDefault)
router.post('/profile', checkAuth, addTechToUser)
router.post('/project', checkAuth, addTechToProject)
router.get('/', getAllTechs)
router.get('/:id', getTechByUserId)

module.exports = router