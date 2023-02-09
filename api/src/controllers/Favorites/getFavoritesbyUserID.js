const { UserFavorites } = require("../../db");

const getUserFavorites = async (req, res) => {
    const { userId } = req.params;

    try {
        const allUserFavorites = await UserFavorites.findAll({where: {userId: userId}})
        const UserFavoriteProducts = allUserFavorites.map(f => f.productId)
        res.status(200).json(UserFavoriteProducts)
    } catch (error) {
        res.status(400).json({ error: "este usuario no tiene productos favoritos" })
    }
};

module.exports = {
    getUserFavorites
}