const { UserFavorites } = require("../../db");
const { allUsers } = require("../../utils/allUsersUtil");

const postFavorite = async (req, res) => {
    try {
        const { email, productId } = req.body

        const users = await allUsers()
        const filtredUser = users.filter(e =>  e.email.includes(email) )
        const dbFavorite = await UserFavorites.findOrCreate({
            where :{
                userId: Number(filtredUser[0].userId),
                productId: Number(productId)}
        })
        return res.status(200).json("Favorite added to DB")
    } catch (error) {
        return res.status(403).json({ msg: error })
    }
};

module.exports = {
    postFavorite
}
