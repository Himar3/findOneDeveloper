const router = require('express').Router()
const { checkAuth, checkRole } = require('../utils')

const { 
    createProjects, 
    getAllProjects,
    getOneProject,
    getOwnProjects, 
    updateOwnProject,
    deleteOwnProject,
    getProjectsByUser
} = require('../controllers/project.controller.js')



router.post('/', checkAuth, createProjects)
router.get('/', getAllProjects)
router.get('/profile', checkAuth, getOwnProjects)
router.get('/developer/:id', checkAuth, getProjectsByUser)
router.get('/:id', checkAuth, getOneProject)
router.put('/:id', checkAuth, updateOwnProject)
router.delete('/:id', checkAuth, deleteOwnProject)


module.exports = router