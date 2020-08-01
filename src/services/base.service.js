class BaseService{
    constructor(repository) {
        this.repository = repository
    }

    async get(id){
        if(!id){
            const err = new Error();
            err.status = 400;
            err.message = "id mus be sent"
            throw err
        }

        const currentRepository = await this.repository.get(id)

        if(!currentRepository){
            const err = new Error();
            err.status = 404;
            err.message = "entity does not found";
            throw err;
        }

        return currentRepository;
    }

    async getAll(pageSize, pageNum){
        return await this.repository.getAll(pageSize, pageNum);
    }

    async create(entity){
        return await this.repository.create(entity);
    }

    async update(id, entity){
        if(!id){
            const err = new Error();
            err.status = 400;
            err.message = "id mus be sent"
            throw err
        }

        return await this.repository.update(id, entity);
    }
    
    async delete(id){
        if(!id){
            const err = new Error();
            err.status = 400;
            err.message = "id mus be sent"
            throw err
        }

        return await this.repository.delete(id);
    }
}

module.exports = BaseService;