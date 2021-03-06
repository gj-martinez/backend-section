const BaseRepository = require('./base.repository');
let _idea = null;

class IdeaRepository extends BaseRepository{
    constructor({Idea}){
        super(Idea);
        _idea = Idea;
    }

    async getUserIdeas(autor){
        return await _idea.find({autor});
    };
}


module.exports = IdeaRepository;