const router = require('express').Router()

const authRouter = require('./auth.routes')
const userRouter = require('./user.routes')
const projectRouter = require('./project.routes')
const techRouter = require('./tech.routes')


router.use('/auth', authRouter)
router.use('/developers', userRouter)
router.use('/projects', projectRouter)
router.use('/techs', techRouter)

module.exports = router