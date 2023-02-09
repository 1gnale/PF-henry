const { Review } = require("../../db");

const postReview = async(req, res) => {
    try {
        const { productId } = req.query;
        const { text, rating, userId } = req.body

        const newReview = await Review.create({
            text: text,
            rating: rating,
            productId: productId,
            userId: userId
        })
        return res.status(200).json(`review sent correctly!`)
    } catch (error) { return res.status(400).json({ error: error.message }) }
}

module.exports = {
    postReview
}