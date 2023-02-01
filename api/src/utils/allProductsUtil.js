const { Products, Category } = require("../db")

const allProducts = async () => {
    const dbProducts = await Products.findAll({
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
            img: e.img,
            weight: e.weight,
            height: e.height,
            offert: e.offert
        }
    })

    return dbProductsClean
}


module.exports = {
    allProducts
}