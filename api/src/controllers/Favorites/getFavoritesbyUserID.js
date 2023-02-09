const { Favorite, User } = require("../../db");

const getUserFavorites = async (req, res) => {
    const { userId } = req.params;

    try {
        const allUserFavorites = await Favorite.findAll({where: {userId: userId}})
        res.status(200).json(allUserFavorites)
    } catch (error) {
        res.status(400).json({ error: "este usuario no tiene productos favoritos" })
    }
};

module.exports = {
    getUserFavorites
}