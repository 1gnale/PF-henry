const { UserFavorites, User } = require("../../db");

const deleteFavorite = async(req, res) => {
    try {
        const { productId } = req.params;
        await UserFavorites.destroy({
          where: {
            productId: productId
          }
        });
        res.status(200).json('deleted');
      } catch (error) {
        res.status(400).send(console.log(error));
      }
}

module.exports= {
    deleteFavorite
}