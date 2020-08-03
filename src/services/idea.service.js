const BaseService = require('./base.service');

let _ideaRepository = null;

class IdeaService extends BaseService{
    constructor({IdeaRepository}){
        super(IdeaRepository);
        _ideaRepository = IdeaRepository;
    }

    async getUserIdeas(autor){
        if(!autor){
            const err = new Error();
            err.status = 400;
            err.message = "userID must be sent";
            throw err;
        }

        return await _ideaRepository.getUserIdeas(autor);
    }

    async upvoteIdea(ideaId){
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
        idea.upvotes.push(true);

        return await _ideaRepository.update(ideaId, {upvotes: idea.upvotes});
    }

    async downvoteIdea(ideaId){
        if(!ideaId){
            const err = new Error();
            err.status = 400;
            err.message = "idIdea must be sent";
            throw err;
        }

        const idea = await _ideaRepository.get(ideaId);
        if(!idea){
            const err = new Error();
            err.status = 404;
            err.message = "idea must be sent";
            throw err;
        }

        idea.downvotes.push(true);

        return await _ideaRepository.update(ideaId, {downvotes: idea.downvotes});
    }

}


module.exports= IdeaService;