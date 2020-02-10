const Post = require('../models/post.model');

// Create a Post
exports.create = (req, res) => {
    const post = new Post({
        title: req.body.title,
        publishDate: req.body.publishDate,
        author: req.body.author,
        description: req.body.description,
        id_user: req.body.id_user
    })

    post.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message
            })
        })
}

// get all posts
exports.findAll = (req, res) => {
    Post.find()
        .then(post => {
            res.send(post);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occured when finding posts."
            })
        })
}

// Get Post by Id
exports.findById = (req, res) => {
    Post.findById(_id = req.params.id)
        .then(post => {
            res.send(post);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occured when finding post."
            })
        })
}

// Update Post by Id
exports.updateById = (req, res) => {
    if (req.body.password = bcrypt.hashSync(req.body.password, 8))

        Post.findByIdAndUpdate(req.params.id, req.body)
            .then(post => {
                res.send(post);
            })
            .catch(err => {
                res.status(500).send({
                    message: err.message || "Some error occured when finding and updating post."
                })
            })
}

// Delete post by Id
exports.deleteByID = (req, res) => {
    Post.findByIdAndDelete(req.params.id)
        .then(post => {
            res.send(post);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occured when finding and deleting post."
            })
        })
}

// Delete All post
exports.deleteAllPost = (req, res) => {
    Post.remove()
        .then(post => {
            res.send(post);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occured when finding and deleting all posts."
            })
        })
}