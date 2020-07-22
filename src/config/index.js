if(process.env.NODE_ENV !== "production"){
    require('dotenv').config();
}

module.exports = {
    PORT: process.env.PORT,
    MONGO_URI: process.env.MONGO_URI,
    APLICACTION_NAME: process.env.APLICACTION_NAME
}