const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
  sequelize.define('Products', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    height: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    weight: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    img: {
      type: DataTypes.TEXT,
    }, 
    description:{
      type: DataTypes.STRING,
      allowNull: false,
    },    
    price: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    stock: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    offert: {
      type: DataTypes.STRING,
      allowNull: false,
    } 
  },
  {
    timestamps: false,
    createdAt: false,
    updatedAt: false
  });
};
