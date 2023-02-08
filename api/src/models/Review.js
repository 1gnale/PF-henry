const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Review', {
        text: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        rating: {
            type: DataTypes.INTEGER,
            validate: {
                min: 1,
                max: 5
            },
            allowNull: false
        },
        productId: {
            type: DataTypes.INTEGER,
            references: {
              model: 'Product',
              key: 'id'
            },
            // allowNull: false,
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
              model: 'User',
              key: 'id'
            }
        }
    }, {
        freezeTableName: true
    }
    )
}