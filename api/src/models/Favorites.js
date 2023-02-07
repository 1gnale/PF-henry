const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Favorites', {
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'User',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      productId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Products',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      }
    },
    {
      timestamps: false,
      createdAt: false,
      updatedAt: false
    });
  };