import express from "express";

import bodyParser from "./middlewares/body-parser";
import handleError from "./middlewares/handle-error";
import handleInvalidResource from "./middlewares/handle-invalid-resource";
import handleResult from "./middlewares/handle-result";

import routes from "./routes";

const server = express();

server.use(bodyParser);

server.use(routes);

server.use(handleResult);
server.use(handleInvalidResource);
server.use(handleError);

export default server;
