const {generateToken} = require('../helpers/jwt.helper');

let _userService = null;

class AuthServices{
    constructor({UserService}){
        _userService = UserService;
    }

    async singUp(user){
        const {username} = user;
        const userExist = await _userService.getUserByUsername(username);
        if(userExist){
            const err = new Error();
            err.status= 400;
            err.message="Ya existe el usuario";
            throw err;
        }

        return await _userService.create(user);
    }

    async singIn(user){
        const {username, password} = user;
        const userExist = await _userService.getUserByUsername(username);
        if(!username){
            const err = new Error();
            err.status =  404;
            err.message = "Usuario no existe";
            throw err;
        }

        const validPassword = userExist.comparePasswords(password);
        if(!validPassword){
            const err = new Error();
            err.status= 400;
            err.message="Password incorrecto";
            throw err
        }

        const userToEncode = {
            username: userExist.username,
            id: userExist._id
        }

        const token = generateToken(userToEncode);

        return {token, user: userExist};

    }


}

module.exports = AuthServices;