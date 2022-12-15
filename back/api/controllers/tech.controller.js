const Tech = require('../models/tech.model')
const User = require('../models/user.model')

const getAllTechs = async(req, res) => {
    try {
        const techs = await Tech.findAll()
        return !techs ? res.status(404).send('Techs not found') : res.status(200).json(techs)
    } catch (error) {
      return res.status(500).send(error.message)
    }
}

const addTechToUser = async(req, res) => {
    try {
        const user = await User.findByPk(res.locals.user.id)
        const tech = await Tech.findByPk(req.body.techId)

        await user.addTech(tech)

        return res.status(200).send('Tech added')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const getTechByUserId = async(req, res) => {
    try {
        const user = await User.findByPk(req.params.id, {
           include: [{model: Tech}]
        })
        
        return !user ? res.send('User not found') : res.status(200).json(user.teches.map(( tech ) => {return tech.name}))
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = { getAllTechs, addTechToUser, getTechByUserId }