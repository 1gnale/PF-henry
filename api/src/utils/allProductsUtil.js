const { Product, Category } = require("../db")

const allProducts = async () => {
    const dbProducts = await Product.findAll({
        include:{
            model: Category,
            attributes: ["name"],
            through: {
                attributes:[]
            }
        }
    })

    
    const dbProductsClean = dbProducts.map((e) => {
        return{
            id: e.id,
            name: e.name,
            price: e.price,
            stock: e.stock,
            description: e.description,
            imageURL: e.imageURL,
            weight: e.weight,
            height: e.height,
            offer: e.offer
        }
    })

    return dbProductsClean
}


module.exports = {
    allProducts
}