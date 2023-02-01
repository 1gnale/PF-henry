const { Products } = require("../../db");

const getByName = async (req, res, next) => {
    const name = req.match.params.name
        if(name){
            try{
            const productsBDD =  await Products.findAll({
                where:{name: name}
            })
            return res.status(200).json(productsBDD)
            }
            catch { 
            return res.status(400).json('Hubo un error en la coneccion de la base de datos')
            } 
        }else{
            next()
}

module.exports={
    getByName
}
        
