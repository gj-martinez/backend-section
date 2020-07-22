let _commentService = null;

class ComentController{
    constructor({ CommentService}){
        _commentService =  CommentService
    }

    async get(req, res){
        const {commentId} = req.params;
        const comment = await  _commentService.get(commentId);
        return res.send(comment);
    };

    async update(req, res){
        const {body} = req;
        const {commentId} = req.params;

        const commentUpdate = await  _commentService.update(commentId, body);
        return res.send(commentUpdate);
    }

    async delete(req, res){
        const {commentId} = req.params;

        const commentDelete = await  _commentService.delete(commentId);
        return res.send(commentDelete);
    }

    async getIdeasComments(req,res){
        const {ideaId} = req.params;

        const comments = await _commentService.getIdeasComments(ideaId);
        return res.send(comments);
    }

    async createComment(req, res){
        const {body} = req;
        const {ideaId} = req.params;

        const createComment = await _commentService.createComment(body, ideaId);
        return res.status(201).send(createComment)
    }

}

module.exports = ComentController;