const { ApolloServer } = require("apollo-server");
const graphqlSchema = require("./graphql/schema");
const graphqlResolver = require("./graphql/resolvers");
const mongoose = require("mongoose");
require('dotenv').config()
mongoose
  .connect(process.env.MONGODB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to database");
  })
  .catch((error) => {
    throw new Error(error);
  });

const server = new ApolloServer({
  typeDefs: graphqlSchema,
  resolvers: graphqlResolver,
});

server.listen().then(({ url }) => {
  console.log(`Server listening at ${url}`);
});
