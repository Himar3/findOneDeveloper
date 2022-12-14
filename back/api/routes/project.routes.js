const router = require('express').Router()
const { checkAuth, checkRole } = require('../utils')

const { 
    createProjects, 
    getAllProjects,
    getOneProject,
    getOwnProjects, 
    updateOwnProject,
    deleteOwnProject
} = require('../controllers/project.controller.js')



router.post('/', checkAuth, createProjects)
router.get('/', getAllProjects)
router.get('/profile', checkAuth, getOwnProjects)
router.get('/:id', getOneProject)
router.put('/:id', checkAuth, updateOwnProject)
router.delete('/:id', checkAuth, deleteOwnProject)


module.exports = router