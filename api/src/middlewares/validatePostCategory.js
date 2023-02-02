const validatePostCategory = (req, res, next) => {
    const { name } = req.body;
    if (!name) return res.status(400).send(`${name} value is required`);
    next()
    }
module.exports={
    validatePostCategory
}