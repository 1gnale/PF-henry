const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
  sequelize.define('Products', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      set: function(val) {
        this.setDataValue('name', val.charAt(0).toUpperCase() + val.slice(1).toLowerCase());
      }
    },
    height: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    weight: {
      type: DataTypes.NUMBER,
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
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    stock: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    offert: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    activeProduct: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    } 
  },
  {
    timestamps: false,
    createdAt: false,
    updatedAt: false
  });
};
