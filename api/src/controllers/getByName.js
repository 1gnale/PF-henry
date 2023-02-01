const { Products } = require("../../db");

module.exports = {
    getByName: async function (name) {
      const productsBDD =  await Products.findAll({
       where:{
        name: name
       }
      })
      return productsBDD
    }
}
       