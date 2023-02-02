const validatePostCategory = (req, res, next) => {
    const { name } = req.body;
    if (!name) return res.status(400).send(`Missing data`);
    next()
    }
module.exports={
    validatePostCategory
}