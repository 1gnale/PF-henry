const { User } = require("../db")

const allUsers = async () => {
    const dbUsers = await User.findAll()
    
    const dbUsersClean = dbUsers.map((e) => {
        return{
            user_id: e.user_id,
            email: e.email,
            fullName: e.fullName,
            nickname: e.nickname,
            picture: e.picture,
            birthday: e.birthday,
            role: e.role,
        }
    })

    return dbUsersClean
}


module.exports = {
    allUsers
}