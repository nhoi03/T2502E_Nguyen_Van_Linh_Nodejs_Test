const treeService = require('../services/tree.service');
const Tree = require('../models/tree.model'); // chỉnh đúng path nếu khác


const getHome = async (req, res) => {
    try {
        const trees = await treeService.getAllTrees();

        res.render('index', {
            trees,
            error: null,
            currentPage: 'home'
        });
    } catch (error) {
        console.error(error);
        res.send('Error loading trees');
    }
};


const getAbout = (req, res) => {
    res.render('about', {
        currentPage: 'about'
    });
};


const addTree = async (req, res) => {
    try {
        const { treename, description, image } = req.body;

        console.log(req.body); // 👈 xem dữ liệu gửi lên

        await treeService.createTree({
            treename,
            description,
            image
        });

        res.redirect('/trees');

    } catch (error) {
        console.error('ADD ERROR:', error); // 👈 xem lỗi thật
        res.send('Error adding tree');
    }
};
const resetTrees = async (req, res) => {
    try {
        if (req.body.confirm !== 'true') {
            return res.send('Unauthorized');
        }

        await treeService.deleteAllTrees();
        res.redirect('/');
    } catch (error) {
        console.error(error);
        res.send('Error resetting data');
    }
};

const deleteTree = async (req, res) => {
    try {
        const id = req.params.id;

        await Tree.findByIdAndDelete(id);

        res.redirect('/trees'); // hoặc '/'
    } catch (error) {
        console.error("DELETE ERROR:", error);
        res.send("Delete failed");
    }
};


const updateTree = async (req, res) => {
    try {
        const { treename, description, image } = req.body;

        await Tree.findByIdAndUpdate(
            req.params.id,
            {
                treename,
                description,
                image
            },
            { new: true }
        );

        res.redirect('/trees');
    } catch (error) {
        console.log("UPDATE ERROR:", error);
        res.send("Error updating");
    }
};

const getAllTrees = async (req, res) => {
    try {
        const trees = await treeService.getAllTrees();

        res.render('table', { trees });
    } catch (error) {
        console.error(error);
        res.send('Error loading trees');
    }
};

module.exports = {
    getHome,
    getAbout,
    addTree,
    resetTrees,
    deleteTree,
    updateTree,
    getAllTrees
};