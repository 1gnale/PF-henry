const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
  sequelize.define('Productos', {
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false
    },
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
      type: DataTypes.STRING,
      defaultValue: 'https://i.pinimg.com/originals/37/2c/db/372cdbb7af08ad27524ef53c53e1ba8d.jpg',
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
