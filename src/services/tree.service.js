const Tree = require('../models/tree.model');

const getAllTrees = async () => await Tree.find();

const createTree = async (data) => {
    return await Tree.create(data); 
};

const deleteAllTrees = async () => await Tree.deleteMany({});


const deleteTreeById = async (id) =>
    await Tree.findByIdAndDelete(id);


const updateTree = async (id, data) => {
    return await Tree.findByIdAndUpdate(id, {
    treename,
    description,
    image
    });
};

module.exports = {
    getAllTrees,
    createTree,
    deleteAllTrees,
    deleteTreeById,
    updateTree
};