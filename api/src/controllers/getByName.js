const { Products } = require("../../db");

module.exports = {
    getByName: async function (name) {
        try{
            const productsBDD =  await Products.findAll({
                where:{name: name}
            })
            return productsBDD
        }
        catch { throw Error ("Hubo un error en la coneccion con la base de datos")}
    } 
}  
       
