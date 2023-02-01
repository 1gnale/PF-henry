const validatePostProduct = (req, res, next) => {
    const {
        name, height, weight, img, description, price, stock, offert, category
    } = req.body;
    if (!name) return res.status(400).send(`Missing data`);
    if (!height) return res.status(400).send(`Missing data`);
    if (!weight) return res.status(400).send(`Missing data`);
    if (!img) return res.status(400).send(`Missing data`);
    if (!description) return res.status(400).send(`Missing data`);
    if (!price) return res.status(400).send(`Missing data`);
    if (!stock) return res.status(400).send(`Missing data`);
    if (!offert) return res.status(400).send(`Missing data`);
    if (!category) return res.status(400).send(`Missing data`)
    next()
}

module.exports = {
    validatePostProduct
}