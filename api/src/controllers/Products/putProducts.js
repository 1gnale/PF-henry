const { Product } = require('../../db')
const { productToUpdateUtil } = require("../../utils/productToUpdateUtil");
const { cloudinary } = require("../../cloudinary");
//this function updates product detail

const updateProduct = async (req, res) => {
    
    try {
    const {name, quantity, increaseStock, height, weight, img, description, price, offert, category} = req.body;
    
    if (img) newImg = await cloudinary.uploader.upload(img, {public_id: name}) 
    const newUrl  = newImg.url
    
    const productToUpdate = await Product.findOne({where: {name: name}}) 
    
    if (productToUpdate && quantity) {
        var newStock = productToUpdate.dataValues.stock - quantity
    } else if (productToUpdate && increaseStock) {
        var newStock = productToUpdate.dataValues.stock + increaseStock
    }

    productToUpdate ?
    updatedDetail = productToUpdateUtil(name, newStock, height, weight, newUrl, description, price, offert, category) :
    res.status(404).json("Product not found :(")
        const updatedProduct = await Product.update(updatedDetail, {where: {id: productToUpdate.dataValues.id}})
        res.status(200).json(updatedProduct)
    } catch(error) {
        res.status(404).json(console.log(error))
    }
}

module.exports = {
    updateProduct
}
