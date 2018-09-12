const ResponseModel = require('../models/responses'),
    PostCtrl = require('./posts.controller'),
    PostModel = require('../models/posts.js');

const responsesCtrl = {
    addResponse: async(req, res) => {
        let post = await PostCtrl.getPost( req.params.id );
        res.render('pages/form.response.twig', {
            post
        });
    },
    listResponses: async(req, res) => {
        let post = await PostCtrl.getPost( req.params.id );
        res.render('pages/list.responses.twig', {
            post_id: req.params.id,
            responses: responsesCtrl.getResponses(req.params.id),
            post
        });
    },
    createResponse: async(req, res) => {
        let body = req.body;

        if (body.response_content && body.post_id) {
            let response = {
                response_content: body.response_content,
                post_id: body.post_id
            };
            response = await ResponseModel.addResponse(response);

            let responses = await responsesCtrl.getResponses(body.post_id);
            // Update post
            let resp = await PostModel.updatePost(body.post_id, { responses_count: responses.length });

            return res.render('pages/list.responses.twig', {
                ok: true,
                message: 'The response was recored correctly!',
                response,
                post: await PostCtrl.getPost( body.post_id ),
                responses
            });
        } else {
            res.render('pages/index.twig');
        }
    },
    getResponses: async(id) => {
        let responses = await ResponseModel.getResponses(id);

        return responses;
    }
};

module.exports = responsesCtrl;