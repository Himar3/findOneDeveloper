const router = require('express').Router()

const authRouter = require('./auth.routes')
const userRouter = require('./user.routes')
const projectRouter = require('./project.routes')


router.use('/auth', authRouter)
router.use('/developers', userRouter)
router.use('/projects', projectRouter)


module.exports = router