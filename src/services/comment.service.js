const BaseService = require('./base.service');

let _commentRepository = null,
    _ideaRepository = null;

class CommentService extends BaseService{
    constructor({CommentRepository, IdeaRepository}) {
        super(CommentRepository);
        _commentRepository = CommentRepository;
        _ideaRepository = IdeaRepository
    };

    async getIdeaComment(ideaId){
        if(!ideaId){
            const err = new Error();
            err.status = 400;
            err.message = "ideaId must be sent";
            throw err;
        }

        const idea = await _ideaRepository.get(ideaId);
        if(!idea){
            const err = new Error();
            err.status = 404;
            err.message = "idea must be sent";
            throw err;
        }
    
        const {comment} = idea;
        return comment;
    }

    async createComment(comment, ideaId){
        if(!ideaId){
            const err = new Error();
            err.status = 400;
            err.message = "ideaId must be sent";
            throw err;
        }

        const idea = await _ideaRepository.get(ideaId);
        if(!idea){
            const err = new Error();
            err.status = 404;
            err.message = "idea must be sent";
            throw err;
        }

        const createdComment = await _commentRepository.create(comment);
        idea.comments.push(createdComment);

        return await _ideaRepository.update(ideaId, {comments: idea.comments});
    }

}

module.exports = CommentService;