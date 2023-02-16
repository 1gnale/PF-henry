const { Router } = require("express");
const { getAllBlogs } = require("../controllers/Blogs/getAllBlogs");
const { postBlog } = require("../controllers/Blogs/postBlog");
const { getBlogById } = require("../controllers/Blogs/getBlogById");
const blogRouter = Router();

blogRouter.get("/", getAllBlogs);
blogRouter.post("/", postBlog);
blogRouter.get("/:id", getBlogById);
module.exports = blogRouter;
