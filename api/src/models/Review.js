const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('review', {
        text: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        rating: {
            type: DataTypes.ENUM(),
            allowNull: false
        },
        productId: {
            type: DataTypes.INTEGER,
            references: {
              model: 'Products',
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
    })
}