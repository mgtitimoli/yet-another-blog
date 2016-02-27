import express from "express";

import bodyParserMiddleware from "./middlewares/body-parser";
import errorMiddleware from "./middlewares/error";

import routes from "./routes";

const server = express();

server.use(bodyParserMiddleware);

server.use(routes);

server.use(errorMiddleware);

export default server;
