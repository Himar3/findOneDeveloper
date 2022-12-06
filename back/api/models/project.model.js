const { DataTypes } = require('sequelize')
const { sequelize } = require('../../database')

const Project = sequelize.define(
    'project',
    {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING
        },
        link: {
            type: DataTypes.STRING
        },
        image: {
            type: DataTypes.STRING
        },
        team: {
            type: DataTypes.ARRAY(DataTypes.STRING)
        }
    },
    { timestamps: false }
)

module.exports