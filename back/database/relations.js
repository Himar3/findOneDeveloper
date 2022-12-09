const User = require('../api/models/user.model.js')
const Project = require('../api/models/project.model.js') 
const Tech = require('../api/models/tech.model.js')


const addRelationsModels = () => {
    try {

        User.hasMany(Project)
        Project.belongsTo(User)

        User.belongsToMany(Tech, {through: 'User_Techs'})
        Tech.belongsToMany(User, {through: 'User_Techs'})

        Project.belongsToMany(Tech, {through: 'Project_Techs'})
        Tech.belongsToMany(Project, {through: 'Project_Techs'})

        console.log('Relations added to models')
    } catch (error) {
        throw error
    }
}

module.exports = addRelationsModels