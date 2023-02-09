const { Router } = require("express")
const { getUserFavorites } = require("../controllers/Favorites/getFavoritesbyUserID");
const { postFavorite } = require("../controllers/Favorites/postFavorite");

const favoriteRouter = Router();

favoriteRouter.get("/:userId", getUserFavorites);
favoriteRouter.post("/", postFavorite)

module.exports=favoriteRouter