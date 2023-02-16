const { Product, Category } = require("../db");

const allProducts = async () => {
  const dbProducts = await Product.findAll({
    include: {
      model: Category,
      attributes: ["name"],
    },
  });
  const dbProductsClean = dbProducts.map((e) => {
    return {
      id: e.id,
      name: e.name,
      price: e.price,
      stock: e.stock,
      description: e.description,
      img: e.img,
      weight: e.weight,
      height: e.height,
      offert: e.offert,
      category: e.Categories.map((e) => e.name),
    };
  });

  return dbProductsClean;
};

module.exports = {
  allProducts,
};
