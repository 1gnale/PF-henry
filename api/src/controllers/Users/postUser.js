const { User } = require("../../db")

const postUser = async (req, res) => {

    try {
        const { user_id, email, fullName, nickname, picture, birthday, role } = req.body;

        const newUser = await User.create({
            user_id: user_id,
            email: email,
            fullName: fullName,
            username: nickname,
            picture: picture,
            birthday: birthday,
            role: role,
        })
        return res.status(201).json("New user created correctly")
    }
    catch (error){
        return res.status(400).json({msg: error})
    }
}

module.exports = {
    postUser
}
