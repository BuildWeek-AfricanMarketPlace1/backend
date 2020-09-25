const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const authRouter = require("../auth/auth-router.js");
// const usersRouter = require("../users/users-router.js");
const itemsRouter = require('../items/items-router')
const locationsRouter = require('../locations/locations-router')
const categoriesRouter = require('../categories/categories-router')
const authentication = require('../auth/authenticate-middleware')

const server = express();

server.use(helmet());
server.use(express.json());
server.use(
    cors({
        origin: "*",
        credentials: true, // works in tandem with the withCredentials option
    })
);

server.use('/api/auth', authRouter)
server.use('/api/items', authentication, itemsRouter)
server.use('/api/locations', authentication, locationsRouter)
server.use('/api/categories', authentication, categoriesRouter)


server.get("/", (req, res) => {
    res.json({ api: "up" });
});

module.exports = server;
