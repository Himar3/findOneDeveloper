const { DataTypes } = require('sequelize')
const { sequelize } = require('../../database/index.js')


const Tech = sequelize.define(
    'tech',
    {
        name: {
            type: DataTypes.STRING
        }
    },
    { timestamps: false }
)

module.exports = Tech