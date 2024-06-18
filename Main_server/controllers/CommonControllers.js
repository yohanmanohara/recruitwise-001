const mongoose = require('mongoose');

// Common function to handle errors
const handleErrors = (res, error) => {
    res.status(500).json({ error: error.message });
};

// Common function to validate ID
const validateId = (id, res) => {
    if (!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({ error: "Invalid item id" });
        return false;
    }
    return true;
};

//get all items
const getAllItems = async (req, res) => {
    try {
        const items = await Item.find();
        res.status(200).json({ items });
    } catch (error) {
        handleErrors(res, error);
    }
};


// Common function to get a single item by ID
const getSingleItem = async (id, res) => {
    try {
        const item = await Item.findById(id);
        if (!item) {
            res.status(404).json({ msg: "Item not found" });
            return;
        }
        res.status(200).json({ item });
    } catch (error) {
        handleErrors(res, error);
    }
};

// Common function to create an item
const createNewItem = async (data, res) => {
    try {
        const item = await Item.create(data);
        res.status(200).json({ item });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Common function to update an item
const updateExistingItem = async (id, data, res) => {
    try {
        const updatedItem = await Item.findByIdAndUpdate(id, data, { new: true });
        res.status(200).json({ item: updatedItem });
    } catch (error) {
        handleErrors(res, error);
    }
};

// Common function to delete an item
const deleteSingleItem = async (id, res) => {
    try {
        const deletedItem = await Item.findByIdAndDelete(id);
        if (!deletedItem) {
            res.status(404).json({ msg: "Item not found" });
            return;
        }
        res.status(200).json({ msg: "Item deleted successfully" });
    } catch (error) {
        handleErrors(res, error);
    }
};

// Common function to delete all items
const deleteAllItems = async (req, res) => {
    try {
        await Item.deleteMany({}); // Deletes all items from the collection
        res.status(200).json({ msg: "All items deleted successfully" });
    } catch (error) {
        handleErrors(res, error);
    }
};

module.exports = {
    validateId,
    getAllItems,
    getSingleItem,
    createNewItem,
    updateExistingItem,
    deleteSingleItem,
    deleteAllItems
};
