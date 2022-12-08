const { DataTypes } = require('sequelize')
const { sequelize } = require('../../database/index.js')

const User = sequelize.define(
    'user',
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: {
                    args: true,
                    msg: 'Invalid email format'
                }
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        image: {
            type: DataTypes.STRING
        },
        about: {
            type: DataTypes.TEXT
        },
        role: {
            type: DataTypes.ENUM('visitant', 'user', 'admin'),
            defaultValue: 'visitant'
        }
    },
    { timestamps: false }
)

module.exports = User