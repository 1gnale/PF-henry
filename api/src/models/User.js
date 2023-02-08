const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('User', {
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
            type: DataTypes.STRING,
            defaultValue: 'https://i.ibb.co/2hFK2bh/favicon.png'
        },
        birthday: {
            type: DataTypes.DATEONLY
        },
        isAdmin: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    },
    {
        freezeTableName: true,
        timestamps: false,
        createdAt: false,
        updatedAt: false
    })
}
