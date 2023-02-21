const { Product, Category } = require("../../db");
const { cloudinary } = require("../../cloudinary");

const postProduct = async (req, res) => {
    
    try {
        const { name, height, weight, img, description, price, stock, offert, category } = req.body;

        const uploadedRes = await cloudinary.uploader.upload(img, {public_id: name})

        const modCategories = await category.map(c => {
            const lowercaseCategory = c.toLowerCase();
            const capitalizedCategory = lowercaseCategory.charAt(0).toUpperCase() + lowercaseCategory.slice(1);
            return capitalizedCategory;
          });

        const newProduct = await Product.create({
            name: name,
            height: height,
            weight: weight,
            img: uploadedRes.url,
            description: description,
            price: price,
            stock: stock,
            offert: offert
        })
        const dbCategories = await Promise.all(modCategories?.map(c => 
            Category.findOrCreate({
                where: {
                    name: c
                }
            })))
        const tempObj = dbCategories.map(([temp, created]) => temp)
        await newProduct.addCategory(tempObj)
        return res.status(201).json("New product created successfully")
    }
    catch (error){
        return res.status(400).json({error: error.message})
    }
}

module.exports = {
    postProduct
}

