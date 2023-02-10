const { Router } = require("express")
//const { getProductReviews } = require("../controllers/Reviews/getProductReviews");
//const { getUserReviews } = require("../controllers/Reviews/getUserReviews");
const { postOrder } = require("../controllers/Order/postOrder");
const { getAllOrders } = require("../controllers/Order/getAllOrders")
const { getOrderById } = require("../controllers/Order/getOrderDetail");
const { getUserOrders } = require("../controllers/Order/getUserOrders")
//const { validatePostReview } = require("../middlewares/validatePostReview")

const orderRouter = Router();

orderRouter.get("/", getOrderById, getAllOrders);
orderRouter.get("/:userId", getUserOrders);
orderRouter.post("/", postOrder);
//reviewRouter.post("/", validatePostReview, postReview);


module.exports=orderRouter