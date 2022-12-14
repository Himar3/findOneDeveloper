const Project = require('../models/project.model.js')
const Tech = require('../models/tech.model.js')
const User = require('../models/user.model.js')


const createProjects = async (req, res) => {
    try {
        const project = await res.locals.user.createProject(req.body, {
            fields: ['id', 'title', 'description', 'image', 'link', 'team']
        })
        return res.status(200).json(project)
    } catch (error) {
        return res.status(500).send(error)
    }
}

const getAllProjects = async (req, res) => {
    try {
        const projects = await Project.findAll({
            include: [{model: Tech}]
        })
        return res.status(200).json(
            projects.map((project) => {
                return ({
                    id: project.id,
                    title: project.title,
                    description: project.description,
                    link: project.link,
                    image: project.image,
                    team: project.team,
                    tech: project.teches.map(( tech ) => {return tech.name})
                })
            })   
        )
    } catch (error) {
        return res.status(500).send(error)
    }
}

const getOneProject = async (req, res) => {
    try {
        const project = await Project.findOne({
            include: [{model: Tech}],
            where: {
                id: req.params.id
            }
        })
        return project ? res.status(200).json({
            id: project.id,
            title: project.title,
            description: project.description,
            link: project.link,
            image: project.image,
            team: project.team.map(( dev ) => {return dev}),
            tech: project.teches.map(( tech ) => {return tech.name})

        }) : res.status(404).send('Project not found')
    } catch (error) {
        return res.status(500).send(error)
    }
}

const getOwnProjects = async (req, res) => {
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

const updateOwnProject = async (req, res) => {
    try {
        const project = await res.locals.user.getProjects({
            where: {
                id: req.params.id
            }
        })

        if(project <= 0) {
            res.status(404).send('Project not found')
        } else {
            const [,project] = await Project.update(req.body, {
                returning: true,
                where: {
                    id: req.params.id
                }
            })
            const data = project[0].dataValues
            return res.status(200).json({
                id: data.id,
                title: data.title,
                description: data.description,
                image: data.image,
                link: data.link,
                team: data.team})
        } 
    } catch (error) {
        return res.status(500).send(error)
    }
}

const deleteOwnProject = async (req, res) => {
    try {
        const project = await res.locals.user.getProjects({
            where: {
                id: req.params.id
            }
        })

        if(project <= 0) {
            return res.status(404).send('Project not found')
        } else {
            await Project.destroy({
                where: {
                    id: req.params.id
                }
            })
        }
        return res.status(200).send('Project deleted!')
    } catch (error) {
        return res.status(500).send(error)
    }
}

module.exports = { createProjects, getAllProjects, getOneProject, getOwnProjects, updateOwnProject, deleteOwnProject }