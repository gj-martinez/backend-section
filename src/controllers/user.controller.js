let _userService = null;

class UserController{
    constructor({UserService}){
        _userService = UserService
    }

    async get(req, res){
        const {userId} = req.params;
        const user = await _userService.get(userId);
        return res.send(user);
    };

    async getAll(req, res){
        const users = await _userService.getAll();
        console.log("controler " + users);
        return res.send(users);
    };

    async update(req, res){
        const {body} = req;
        const usearId = req.params;

        const userUpdate = await _userService.update(usearId, body);
        return res.send(userUpdate);
    }

    async delete(req, res){
        const {userId} = req.params;

        const userDelete = await _userService.delete(userId);
        return res.send(userDelete);
    }
}

module.exports = UserController;