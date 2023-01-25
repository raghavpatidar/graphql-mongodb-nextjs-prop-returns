

const House = require("../models/note");

module.exports = {
  Query: {
    getHouse: async (parent, args) => {
      try {
        const { id } = args;
        conhouse = await House.findById(id);
        if (!house) {
          const error = new Error("No house found!");
          error.code = 404;
          throw error;
        }

        return house;
      } catch (error) {
        throw new Error(error);
      }
    },
    getHouses: async (parent, args) => {
      try {
        const houses = await House.find();
        return houses;
      } catch (error) {
        throw new Error(error);
      }
    },
  },

  Mutation: {
    createHouse: async (parent, args) => {
      try {
        const { houseInput } = args;
        return await House.create(houseInput);
      } catch (error) {
        throw new Error(error);
      }
    },
    updateHouse: async (parent, args) => {
      try {
        const { id, houseInput } = args;
        const house = await House.findById(id);
        if (!house) {
          const error = new Error("No house found!");
          error.code = 404;
          throw error;
        }
        return await House.findOneAndUpdate(id, houseInput, { new: true });
      } catch (error) {
        throw new Error(error);
      }
    },
    deleteHouse: async (parent, args) => {
      try {
        const { id } = args;
        const house = await House.findById(id);
        if (!house) {
          const error = new Error("No house found!");
          error.code = 404;
          throw error;
        }
        await House.findByIdAndDelete(id);
        return true;
      } catch (error) {
        throw new Error(error);
      }
    },
  },
};
