let _userService = null;

class UserController{
    constructor({UserService}){
        _userService = UserService
    }

    async get(req, res){
        const {_id} = req.params;
        const user = await _userService.get(_id);
        return res.send(user);
    };

    async getAll(req, res){
        const {pageSize, pageNum} = req.query
        const users = await _userService.getAll(pageSize, pageNum);
        return res.send(users);
    };

    async update(req, res){
        const {body} = req;
        const _id = req.params;

        const userUpdate = await _userService.update(_id, body);
        return res.send(userUpdate);
    }

    async delete(req, res){
        const {_id} = req.params;

        const userDelete = await _userService.delete(_id);
        return res.send(userDelete);
    }
}

module.exports = UserController;