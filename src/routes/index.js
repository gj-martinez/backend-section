const express = require('express');
const cors = require('cors');
const compression = require('compression');
const helmet = require('helmet');
const {ErrorMiddleware, NotFoundMiddleware} = require('../middlewares')
require('express-async-errors');


module.exports = function({HomeRoutes, UserRoutes, IdeaRoutes, CommentRoutes, AuthRoutes}){
    const router = express.Router();
    const apiRuotes = express.Router();

    apiRuotes
        .use(express.json())
        .use(cors())
        .use(helmet())
        .use(compression());

    apiRuotes.use("/home", HomeRoutes);
    apiRuotes.use("/user", UserRoutes);
    apiRuotes.use("/idea", IdeaRoutes);
    apiRuotes.use("/comment", CommentRoutes);
    apiRuotes.use("/auth", AuthRoutes);

    router.use("/v1/api", apiRuotes);
    
    router.use(NotFoundMiddleware);
    router.use(ErrorMiddleware);
    
    return router;
}