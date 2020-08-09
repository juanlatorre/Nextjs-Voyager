import express from "express";
import { PageConfig } from "next";
import { express as voyagerMiddleware } from "graphql-voyager/middleware";

const server = express();

server.use(
  "/api/voyager/",
  voyagerMiddleware({ endpointUrl: "http://localhost:3000/api/graphql" })
);

server.use((_req, res) => {
  res.sendStatus(404);
});

export const config: PageConfig = {
  api: {
    externalResolver: true,
  },
};

export default server;

