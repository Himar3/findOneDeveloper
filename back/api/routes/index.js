const router = require('express').Router()
const authRouter = require('./auth.router')
const userRouter = require('./user.router')

router.use('/user', userRouter)
router.use('/signup', authRouter)


module.exports = router