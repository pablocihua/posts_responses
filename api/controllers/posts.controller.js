const PostModel = require('../models/posts');

const postsCtrl = {
    getIndex: (req, res) => {
        res.render('pages/index.twig', {
            posts: postsCtrl.getPosts()
        });
    },
    getPosts: async(req, res) => {
        let posts = await PostModel.getPosts();

        return posts;
        /* PostModel.getPosts()
            .then((resp) => {
                res.render('pages/index.twig', {
                    posts: resp
                });
            })
            .catch(err => {
                console.log('There is a error to get the posts ', err);
            }); */
    },
    addPost: (req, res) => {
        res.render('pages/form.twig');
    },
    createPost: (req, res) => {
        let body = req.body;

        if (body.post_content) {
            let post = {
                post_content: body.post_content
            };
            PostModel.addPost(post)
                .then(async(resp) => {
                    let posts = await postsCtrl.getPosts();

                    return res.render('./pages/index.twig', {
                        ok: true,
                        message: 'The post was recored correctly!',
                        post: resp,
                        posts: posts
                    });
                })
                .catch();
        } else {
            res.render('pages/index.twig', {
                ok: false,
                message: 'The posts is necessary'
            });
        }
    },
    updatePost: (req, res) => {

    }
}

module.exports = postsCtrl;