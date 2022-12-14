const User = require('../models/user.model')
const Tech = require('../models/tech.model')


const getOwnProfile = async(req, res) => {
    try {
        const user = await User.findByPk(res.locals.user.id, {
            include: [{model: Tech}],
            attributes: {
                exclude: ['password']
            }
        }) 
        return !user ? res.status(404).send('User not found') : res.status(200).json({
            id: user.id,
            name: user.name,
            email: user.email,
            image: user.image,
            about: user.about,
            tech: user.teches.map(( tech ) => {return tech.name})
        })
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const getAllUsers = async(req, res) => {
    try {
        const users = await User.findAll({
            include: [{model: Tech}],
            attributes: { exclude: ['password']
        }})
        return !users ? res.status(404).send('Users not found') : res.status(200).json(
            users.map((user) =>  {
                return ({
                    id: user.id,
                    name: user.name,
                    image: user.image,
                    about: user.about,
                    tech: user.teches.map(( tech ) => {return tech.name})
                })
            })
        )
    } catch (error) {
      return res.status(500).send(error.message)
    }
}

const getUserById = async(req, res) => {
    try {
        const user = await User.findByPk(req.params.id, {
            attributes: {
                exclude: ['password']
            }
        })
        return !user ? res.status(404).send('User not found') : res.status(200).json(user)
    } catch (error) {
      return res.status(500).send(error.message)
    }
}


const updateOwnProfile = async (req, res) => {
    try {
        const [ , user] = await User.update(req.body, {
            returning: true,
            where: {
                id: res.locals.user.id
            }
        })
        const data = user[0].dataValues
        return !user ? res.status(404).send('Developer not found') : res.status(200).json({
            msg: 'User updated',
            id: data.id,
            name: data.name,
            email: data.email,
            image: data.image,
            about: data.about
        })
    } catch (error) {
        return res.status(500).send(error.message)
    }
} 

const deleteOwnProfile = async(req, res) => {
    try {
        const user = await User.destroy({
            where: {
            id: res.locals.user.id
            }
        })
        return !user ? res.status(404).send('User not found') : res.status(200).send('User deleted')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = {
    getOwnProfile,
    getAllUsers,
    getUserById,
    updateOwnProfile,
    deleteOwnProfile
}