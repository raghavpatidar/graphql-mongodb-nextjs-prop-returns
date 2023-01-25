const { ApolloServer } = require("apollo-server");
const graphqlSchema = require("./graphql/schema");
const graphqlResolver = require("./graphql/resolvers");
const mongoose = require("mongoose");
const MONGODB = 'mongodb+srv://raghavpatidar:raghav9977649723patidar@cluster0.masm8ak.mongodb.net/?retryWrites=true&w=majority';
// "mongodb://localhost:27017/graphlq"
mongoose
  .connect(MONGODB, {
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
