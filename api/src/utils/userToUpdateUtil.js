
const userToUpdateUtil = (userToUpdate, email, fullName, username, picture, birthday, addressLineOne, addressLineTwo, telephone) => {
    const changedDetail = {}
    changedDetail.id = userToUpdate.dataValues.id
    changedDetail.fullName = fullName
    changedDetail.username = username
    changedDetail.picture = picture
    changedDetail.birthday = birthday
    changedDetail.addressLineOne = addressLineOne
    changedDetail.addressLineTwo = addressLineTwo
    changedDetail.telephone = telephone
    changedDetail.email = email

    return changedDetail
}

module.exports = {
    userToUpdateUtil
}