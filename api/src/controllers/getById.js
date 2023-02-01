const {allProducts} = require('../utils/allProductsUtil')

const getById = async (req, res) => {
    try {
        const {idProduct} = req.params
        const allProd = await allProducts()
        const id = await allProd.filter(e => e.id == idProduct)
        await id.length > 0 ?
        res.status(200).json(id) :
        res.status(404).send('Product ID not found')
    } catch (error) {
        console.error(error)
        res.status(404).send('Error getting product ID')
    }
}

module.exports = {
    getById
}