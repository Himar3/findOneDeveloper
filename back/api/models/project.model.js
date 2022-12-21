const { DataTypes } = require('sequelize')
const { sequelize } = require('../../database')

const Project = sequelize.define(
    'project',
    {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        type: {
            type: DataTypes.STRING,
        },
        description: {
            type: DataTypes.TEXT
        },
        link: {
            type: DataTypes.TEXT
        },
        image: {
            type: DataTypes.TEXT
        },
        team: {
            type: DataTypes.ARRAY(DataTypes.STRING)
        }
    },
    { timestamps: false }
)

module.exports = Project