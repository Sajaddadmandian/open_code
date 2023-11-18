const express = require("express");
const blogControllers = require("../controllers/blogController");

const router = express.Router();

router.get("/", blogControllers.blog_index);
router.post("/", blogControllers.blog_create_post);
router.get("/create", blogControllers.blog_create_get);
router.get("/:id", blogControllers.blog_detailes);
router.delete("/:id", blogControllers.blog_delete);

module.exports = router;
