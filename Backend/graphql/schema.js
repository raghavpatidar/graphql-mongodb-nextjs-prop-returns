const { gql } = require("apollo-server");


module.exports = gql`
  type House {
    _id: ID
    price: String!
    address: String!
    noOfBeds:String!
    noOfBathroom:String!
    area: String!
    createdAt: String!
    updatedAt: String!
  }

  input HouseInputData {
    price: String!
    address: String!
    noOfBeds:String!
    noOfBathroom:String!
    area: String!
  }

  type Query {
    getHouses: [House!]!
    getHouse(id: ID!): House!
  }

  input HouseInputData {
    price: String!
    address: String!
    noOfBeds:String!
    noOfBathroom:String!
    area: String!
  }

  type Mutation {
    createHouse(houseInput: HouseInputData): House!
    updateHouse(id: ID!, houseInput: HouseInputData): House!
    deleteHouse(id: ID!): Boolean
  }
`;
