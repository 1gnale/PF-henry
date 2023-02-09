
const userToUpdateUtil = (userToUpdate, user_id, email, fullName, username, picture, birthday) => {
    const changedDetail = {}
    changedDetail.id = userToUpdate.dataValues.id
    changedDetail.fullName = fullName
    changedDetail.username = username
    changedDetail.picture = picture
    changedDetail.birthday = birthday
    changedDetail.user_id = user_id
    changedDetail.email = email

    return changedDetail
}

module.exports = {
    userToUpdateUtil
}