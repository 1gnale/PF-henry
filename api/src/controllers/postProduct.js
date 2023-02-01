const {Products, Category} = require("../db")

const postProduct = async(req, res) => {
    
    try{
        const {name, height, weight, img, description, price, stock, offert, category} = req.body;

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
        const newCategory = await Category.findOrCreate({
        where: {
            name: category
        }})
        newProduct.addCategory(newCategory)
        return res.status(200).json("New product created correcly")
        } 
    catch{
        return res.status(400).json("Product was not created")
        }
}

mosule.export = {
    postProduct
}

