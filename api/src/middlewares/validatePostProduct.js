const validatePostProduct = (req, res, next) => {
    const {
        name, height, weight, img, description, price, stock, offert, category
    } = req.body;
    if (!name) return res.status(400).send(`Name is required`);
    if (!height) return res.status(400).send(`Height is required`);
    if (!weight) return res.status(400).send(`Weight is required`);
    if (!img) return res.status(400).send(`An image is required`);
    if (!description) return res.status(400).send(`A description is required`);
    if (!price) return res.status(400).send(`Price value is required`);
    if (!stock) return res.status(400).send(`Stock is required`);
    if (!offert) return res.status(400).send(`Offer value is required`);
    if (!category) return res.status(400).send(`Category or categories are required`)
    next()
}

module.exports = {
    validatePostProduct
}