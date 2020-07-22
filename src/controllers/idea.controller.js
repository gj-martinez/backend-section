let _ideaService = null;

class IdeaController{
    constructor({ IdeaService}){
        _ideaService =  IdeaService
    }

    async get(req, res){
        const {ideaId} = req.params;
        const idea = await  _ideaService.get(ideaId);
        return res.send(idea);
    };

    async getAll(req, res){
        const ideas = await  _ideaService.getAll();
        return res.send(ideas);
    };
    async create(req, res){
        const {body} = req;
        const createIdea = await _ideaService.create(body);
        return res.status(200).sen(createIdea);
    }
    async update(req, res){
        const {body} = req;
        const ideaId = req.params;

        const ideaUpdate = await  _ideaService.update(ideaId, body);
        return res.send(ideaUpdate);
    }

    async delete(req, res){
        const {ideaId} = req.params;

        const ideaDelete = await  _ideaService.delete(ideaId);
        return res.send(ideaDelete);
    }

    async upvoteIdea(req, res){
        const {ideaId} = req.params;
        const idea = await _ideaService.upvoteIdea(ideaId);
        return res.send(idea);
    }
    async downvoteIdea(req, res){
        const {ideaId} = req.params;
        const idea = await _ideaService.downvoteIdea(ideaId);
        return res.send(idea);
    }


}

module.exports = IdeaController;