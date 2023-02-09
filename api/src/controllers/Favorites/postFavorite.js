const { UserFavorites } = require("../../db");

const postFavorite = async(req, res) => {
   try { 
    const { userId, productId } = req.body

    const dbFavorite = await UserFavorites.findOrCreate({
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
