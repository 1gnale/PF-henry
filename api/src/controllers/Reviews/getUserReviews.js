const { Review } = require("../../db");

const getUserReviews = async (req, res) => {

    try{
        const { userId } = req.params;
    
        const userReviews = await Review.findAll({where: {userId: userId}})
        userReviews.length > 0 ?
        res.status(200).json(userReviews)
        : res.status(404).json("No reviews by this user")
    }
    catch(error) {
        res.status(400).json({err: "An error occurred while connecting to the DB"})
    }
}

module.exports = {
    getUserReviews
}