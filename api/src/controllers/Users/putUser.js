const { User } = require('../../db')
const { userToUpdateUtil } = require("../../utils/userToUpdateUtil")

const updateUser = async (req, res) => {

    const {
        email, fullName, username, picture, birthday, addressLineOne, addressLineTwo, telephone
    } = req.body

    const userToUpdate = await User.findOne({where: {email: email}}) 
    
    userToUpdate ?
    updatedDetail = userToUpdateUtil(userToUpdate, email, fullName, username, picture, birthday, addressLineOne, addressLineTwo, telephone) :
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
