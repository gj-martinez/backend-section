if(process.env.NODE_ENV !== "production"){
    require('dotenv').config();
}

module.exports = {
    PORT: process.env.PORT,
    MONGO_URI: process.env.MONGO_URI,
    APLICACTION_NAME: process.env.APLICACTION_NAME,
    JWT_SECRET: process.env.JWT_SECRET,
    CACHE_KEY: process.env.CACHE_KEY
}