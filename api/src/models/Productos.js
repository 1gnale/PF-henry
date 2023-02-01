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
    life_span: {
      type: DataTypes.STRING
    },
    img: {
      type: DataTypes.STRING,
      defaultValue: 'https://i.pinimg.com/originals/37/2c/db/372cdbb7af08ad27524ef53c53e1ba8d.jpg',
    }, 
    descripcion:{
      type: DataTypes.STRING,
      allowNull: false,
    },    
    precio: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    stockActual: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    oferta: {
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
