const { Products, Category } = require("../db")

const postProduct = async (req, res) => {

    try {
        const { name, height, weight, img, description, price, stock, offert, category } = req.body;

        const newProduct = await Products.create({
            name: name,
            height: height,
            weight: weight,
            img: img,
            description: description,
            price: price,
            stock: stock,
            offert: offert
        })
        newProduct.addCategories(category)
        return res.status(200).json("New product created correcly")
    }
    catch (error){
        return res.status(400).json({error: error.message})
    }
}

module.exports = {
    postProduct
}

