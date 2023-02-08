const { User } = require('../../db')
const { userToUpdateUtil } = require("../../utils/userToUpdateUtil")

const updateUser = async (req, res) => {

    const {
        user_id, email, fullName, username, picture, birthday
    } = req.body

    const userToUpdate = await User.findOne({where: {user_id: user_id}}) 
    
    userToUpdate ?
    updatedDetail = userToUpdateUtil(userToUpdate, user_id, email, fullName, username, picture, birthday) :
    res.status(404).json("User not found :(")

    try {
        const [updatedUser, created] = await User.upsert(updatedDetail)
        res.status(200).json(updatedUser || created)
    } catch(error) {
        res.status(404).json(console.log(error))
    }
}

module.exports = {
    updateUser
}
