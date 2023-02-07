const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('user', {
        email: {
            type: DataTypes.STRING,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        fullName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        username: {
            type: DataTypes.STRING
        },
        user_id: {
            type: DataTypes.STRING,
            allowNull: false
        },
        picture: {
            type: DataTypes.STRING
        },
        birthday: {
            type: DataTypes.DATEONLY
        },
        role: {
            type: DataTypes.ENUM('client', 'admin')
        }
    },
    {
        timestamps: false,
        createdAt: false,
        updatedAt: false
    })
}
