const {Router} = require('express');
const {ParseIntMiddleware, AuthMiddleware} = require('../middlewares')
module.exports = function ({IdeaController}) {
    const router = Router();


    router.get("",[ParseIntMiddleware],IdeaController.getAll);
    router.get("/:_id", IdeaController.get);
    router.get("/:_id/all", IdeaController.getUserIdeas);
    router.post("", IdeaController.create);
    router.patch("/:_id",AuthMiddleware, IdeaController.update);
    router.delete("/:_id", AuthMiddleware,IdeaController.delete);
    router.post("/:_id/upvote", AuthMiddleware,IdeaController.upvoteIdea);
    router.post("/:_id/downvote", AuthMiddleware,IdeaController.downvoteIdea);

    return router;
};