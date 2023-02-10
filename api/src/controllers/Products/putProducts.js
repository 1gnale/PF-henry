const { Product } = require('../../db')
//this function updates stock of product

const updateProduct = async (req, res) => {

    const {productId, quantity, increaseStock} = req.body

    const productToUpdate = await Product.findOne({where: {id: productId}}) 
    
    if (productToUpdate && quantity) {
        var newStock = productToUpdate.dataValues.stock - quantity
    } else if (productToUpdate && increaseStock) {
        var newStock = productToUpdate.dataValues.stock + increaseStock
    } else {
        res.status(400).json("Product no found")
    }

    try {
        await productToUpdate.update({stock: newStock})
        await productToUpdate.save()
        res.status(200).json(productToUpdate)
    } catch(error) {
        res.status(404).json(console.log(error))
    }
}

module.exports = {
    updateProduct
}
