const Tree = require('../models/tree.model');

const getAllTrees = async () => await Tree.find();

const createTree = async (treename, description, image) =>
    await Tree.create({ treename, description, image });

const deleteAllTrees = async () => await Tree.deleteMany({});


const deleteTreeById = async (id) =>
    await Tree.findByIdAndDelete(id);


const updateTree = async (id, data) =>
    await Tree.findByIdAndUpdate(id, data);

module.exports = {
    getAllTrees,
    createTree,
    deleteAllTrees,
    deleteTreeById,
    updateTree
};