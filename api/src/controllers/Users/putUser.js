const { User } = require('../../db')

const updateUser = async (req, res) => {

    const changedDetail = {}
    const {
        user_id, email, fullName, username, picture, birthday
    } = req.body

    const userToUpdate = await User.findOne({where: {user_id: user_id}}) 
    
    if (userToUpdate) changedDetail.id = userToUpdate.dataValues.id
    changedDetail.fullName = fullName
    changedDetail.username = username
    changedDetail.picture = picture
    changedDetail.birthday = birthday
    changedDetail.user_id = user_id
    changedDetail.email = email

    try {
        const [updatedUser, created] = await User.upsert(changedDetail)
        res.status(200).json(updatedUser)
    } catch(error) {
        res.status(404).json(console.log(error))
    }
}

module.exports = {
    updateUser
}
