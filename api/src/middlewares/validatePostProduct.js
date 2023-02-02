const validatePostProduct = (req, res, next) => {
    const {
        name, height, weight, img, description, price, stock, offert, category
    } = req.body;
    if (!name) return res.status(400).send(`${name} value is required`);
    if (!height) return res.status(400).send(`${height} value is required`);
    if (!weight) return res.status(400).send(`${weight} value is required`);
    if (!img) return res.status(400).send(`${img} value is required`);
    if (!description) return res.status(400).send(`${description} value is required`);
    if (!price) return res.status(400).send(`${price} value is required`);
    if (!stock) return res.status(400).send(`${stock} value is required`);
    if (!offert) return res.status(400).send(`${offert} value is required`);
    if (!category) return res.status(400).send(`${category} value is required`)
    next()
}

module.exports = {
    validatePostProduct
}