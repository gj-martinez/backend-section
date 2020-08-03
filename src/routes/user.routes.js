const {Router} = require('express');
const {AuthMiddleware, ParseIntMiddleware, CacheMiddleware} = require('../middlewares');
const {CACHE_TIME} = require('../helpers')


module.exports = function({UserController}){
    const router = Router();

    router.get("",[ ParseIntMiddleware, CacheMiddleware(CACHE_TIME.ONE_HOUR)],UserController.getAll);
    router.get("/:_id" ,UserController.get);
    router.patch("/:_id", AuthMiddleware,UserController.update);
    router.delete("/:_id",AuthMiddleware, UserController.delete);

    return router;
};