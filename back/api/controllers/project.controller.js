const Project = require('../models/project.model.js')
const User = require('../models/user.model.js')

const createProject = async (req, res) => {
    try {
        const project = await res.locals.user.createProject(req.body, {
            fields: ['title', 'description', 'image', 'link', 'team']
        })
        return res.status(200).json({project})
    } catch (error) {
        return res.status(500).send(error)
    }
}

const getAllProjects = async () => {
    try {
        const projects = await Project.findAll()
        return res.status(200).json(projects)
    } catch (error) {
        return res.status(500).send(error)
    }
}

const getOneProject = async () => {
    try {
        const project = await Project.findOne({
            where: {
                id: req.params.id
            }
        })
        return project ? res.status(200).json(project) : res.status(404).send('Project not found')
    } catch (error) {
        return res.status(500).send(error)
    }
}

const getOwnProjects = async () => {
    try {
        const projects = await Project.findAll({
            where: {
                userId: res.locals.user.id
            }
        })
        return projects ? res.status(200).json(projects) : res.status(404).send(`You don't have any project`)
    } catch (error) {
        return res.status(500).send(error)
    }
}

module.exports = { createProject, getAllProjects, getOneProject, getOwnProjects }