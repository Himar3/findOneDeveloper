const router = require('express').Router()
const { checkAuth, checkRole } = require('../utils')

const { 
    createProject 
} = require('../controllers/project.controller.js')


router.post('/', checkAuth, createProject)

module.exports = router