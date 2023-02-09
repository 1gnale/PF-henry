const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define('OrderDetails', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
              model: 'User',
              key: 'id'
            }
        },
        totalAmount: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        date: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        },
        status: {
            type: DataTypes.ENUM,
            values: ['pending', 'completed', 'cancelled'],
            defaultValue: 'pending'
        }
        }, {
          timestamps: false,
          freezeTableName: true
        });
}