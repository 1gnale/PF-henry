const { Review, User, Product } = require("../../db");

const deleteFavorite = async(req, res) => {

    try {
       const dbFavorite = await Review.destroy({
            where :{ rating }
        })
        res.status(200).json('deleted');
      } catch (error) {
        res.status(400).send(console.log(error));
      }
}

module.exports= {
    deleteFavorite
}