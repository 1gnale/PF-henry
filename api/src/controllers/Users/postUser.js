const { User } = require("../../db")

const postUser = async (req, res) => {

    try {
        const { email, fullName, username, picture, birthday, isAdmin } = req.body;
        
            const newAdmin = await User.create({
                email: email,
                fullName: fullName,
                username: username,
                picture: picture,
                birthday: birthday,
                isAdmin: isAdmin
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
