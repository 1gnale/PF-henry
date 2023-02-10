const { OrderItems, OrderDetails } = require("../../db")

const postOrder = async(req, res) => {
    try {
        const { userId, totalAmount, status, paypalId, products } = req.body;


        const newOrder = await OrderDetails.create({
            userId: userId,
            totalAmount: totalAmount,
            payPalOrderId: paypalId,
            status: status.toLowerCase()
        })

        const orderIdDB = newOrder.dataValues.id

        const soldItems = await Promise.all(products.map(i => 
            OrderItems.create({
               orderId: orderIdDB,
               productId: i.productId,
               quantity: i.quantity
            })))

        return res.status(201).json("New product created correctly")
    }
    catch (error){
        return res.status(400).json({error: error.message})
    }
}
module.exports= {
    postOrder
}