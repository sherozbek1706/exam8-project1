// import { ApolloServer } from "@apollo/server";
// import { startStandaloneServer } from "@apollo/server/standalone";

// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
// });

// startStandaloneServer(server, { listen: { port: 8080 } }).then(({ url }) => {
//   console.log(`Server ishladi: ${url}`);
// });

const express = require("express");
const db = require("./db/index");
const app = express();

app.listen(5000, () => {
  console.log("listen 500");
});
