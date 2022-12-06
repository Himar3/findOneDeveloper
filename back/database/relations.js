const User = require('../api/models/user.model.js')
const Project = require('../api/models/project.model.js') 


const addRelationsModels = () => {
    try {

        User.hasMany(Project)
        Project.belongsTo(User)

        console.log('Relations added to models')
    } catch (error) {
        throw error
    }
}

module.exports = addRelationsModels