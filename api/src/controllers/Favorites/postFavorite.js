const { User, Favorite, Product } = require("../../db");
const { getUserById } = require("../Users/getUsersById");
const { getProductById } = require("../Products/getById")

const postFavorite = async(req, res) => {
   try { 
    const { userId, productId } = req.body

    const dbFavorite = await Favorite.findOrCreate({
            where: {
                userId: userId,
                productId: productId
            }
        })

    res.status(200).json("Favorite added to DB")
    } catch(error) {
        res.status(403).json({msg: error})
    }
    
};

module.exports= {
    postFavorite
}
