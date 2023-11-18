const Blog = require("../model/blog");

const blog_index = (req, res) => {
  Blog.find()
    .sort({ createdAt: -1 })
    .then((blogs) => {
      res.render("index", { Title: "All Blogs", blogs });
    });
};

const blog_detailes = (req, res) => {
  const id = req.params.id;
  Blog.findById(id)
    .then((result) => {
      res.render("details", { blog: result, Title: "Blog Details" });
    })
    .catch((err) => {
      console.log(err);
    });
};

const blog_create_get = (req, res) => {
  res.render("create", { Title: "NewBlog" });
};

const blog_create_post = (req, res) => {
  const blog = new Blog(req.body);

  blog
    .save()
    .then((result) => {
      res.redirect("/blogs");
    })
    .catch((err) => {
      console.log(err);
    });
};

const blog_delete = (req, res) => {
  const id = req.params.id;

  Blog.findByIdAndRemove(id)
    .then((result) => {
      res.json({ redirect: "/blogs" });
    })

    .catch((err) => console.log(err));
};

module.exports = {
  blog_index,
  blog_detailes,
  blog_create_get,
  blog_create_post,
  blog_delete,
};
