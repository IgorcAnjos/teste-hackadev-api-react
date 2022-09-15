import express, { json } from "express";

import * as dotenv from "dotenv";
import router from "./route/index.mjs";
dotenv.config();

const server = express();

const port = process.env.PORT;

server.use(json());

server.use("/", router);

server.listen(port, () => {
  console.log(`Servidor escutando na porta: ${port}`);
});
