const validatePostUser = (req, res, next) => {
    const {
        email,
        fullName,
        username,
        user_id,
        picture,
        birthday
    } = req.body
    if(!email) return res.status(404).send(`${email} field is required`)
    if(!fullName) return res.status(404).send(`${fullName} field is required`)
    if(!username) return res.status(404).send(`${user_id} field is required`)
    if(!picture) return res.status(404).send(`${picture} field is required`)
    if(!birthday) return res.status(404).send(`${birthday} field is required`)
    next()
}

module.exports = {
    validatePostUser
}