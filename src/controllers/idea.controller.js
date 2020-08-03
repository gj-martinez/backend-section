let _ideaService = null;

class IdeaController{
    constructor({ IdeaService}){
        _ideaService =  IdeaService
    }

    async get(req, res){
        const {_id} = req.params;
        const idea = await  _ideaService.get(_id);
        return res.send(idea);
    };

    async getAll(req, res){
        const {pageSize, pageNum} = req.query
        const ideas = await _ideaService.getAll(pageSize, pageNum);
        return res.send(ideas);
    };

    async getUserIdeas(req, res){
        const {_id} = req.params;

        const ideas = await _ideaService.getUserIdeas(_id);
        return res.send(ideas);
    };

    async create(req, res){
        const {body} = req;
        const createIdea = await _ideaService.create(body);
        return res.status(200).send(createIdea);
    }
    async update(req, res){
        const {body} = req;
        const _id = req.params;

        const ideaUpdate = await  _ideaService.update(_id, body);
        return res.send(ideaUpdate);
    }

    async delete(req, res){
        const {_id} = req.params;

        const ideaDelete = await  _ideaService.delete(_id);
        return res.send(ideaDelete);
    }

    async upvoteIdea(req, res){
        const {_id} = req.params;
        const idea = await _ideaService.upvoteIdea(_id);
        return res.send(idea);
    }
    async downvoteIdea(req, res){
        const {_id} = req.params;
        const idea = await _ideaService.downvoteIdea(_id);
        return res.send(idea);
    }

    
}

module.exports = IdeaController;