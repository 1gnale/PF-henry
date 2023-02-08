const { User } = require("../../db")

const getByName = async (req, res, next) => {
    const { fullName } = req.query
        if(fullName){
            try{
            const usersDB =  await User.findAll() 
            const results = usersDB.filter(e => e.fullName.toLowerCase().includes(fullName.toLowerCase()))
            if (results.length > 0) return res.status(200).json(results)
            else return res.status(404).json("No hay productos con ese nombre")
            }
            catch { 
            return res.status(400).json('Hubo un error en la coneccion de la base de datos')
            } 
        }else{
            next()
        }
}

module.exports = {
    getByName
}