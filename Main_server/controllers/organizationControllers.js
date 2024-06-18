const OrgenizationModel = require('../Models/Organization')
const {validateId,getAllItems, getSingleItem,createNewItem, updateExistingItem, deleteSingleItem, deleteAllItems } = require('./CommonControllers')

//get a single Orgenization
const getSingleOrgenization = async (req,res) => {
    try{
        const id = req.params.id
        if(!validateId(id,res)){
            return;
        }
        const Orgenization = await getSingleItem(id,res);
        res.status(200).json({Orgenization})
    }catch(error){
        res.status(500).json({error: error.message});
    }
}


//get all Orgenizations
const getAllOrgenizations = async (req,res) => {
    try{
        const Orgenization = await getAllItems(res);
        res.status(200).json({Orgenization})
    }catch(error){
        res.status(500).json({error: error.message});
    }
}


// create a new Orgenization
const createNewOrgenization = async (req,res) => {
    try{
        const data = req.body 
        const Orgenization = await createNewItem(data,res);
        res.status(200).json({Orgenization})
    }catch(error){
        res.status(500).json({error: error.message});
    }
}


//update an existing Orgenization
const updatedOrgenization = async (req,res) => {
    try{
        const id = req.params.id
        if(!validateId(id,res)){
            return;
        }
        const data = req.body
        const Orgenization = await updateExistingItem(id,data,res);
        res.status(200).json({Orgenization})
    }catch(error){
        res.status(500).json({error: error.message});
    }
}

// delete a single Orgenization
const deleteSingleOrgenization = async (req,res) => {
    try{
        const id = req.params.id
        if(!validateId(id,res)){
            return;
        }
        const Orgenization = await deleteSingleItem(id,res);
        res.status(200).json({Orgenization})
    }catch(error){
        res.status(500).json({error: error.message});
    }
}


// delete all Orgenizations
const deleteAllOrgenizations = async (req,res) => {
    try{
        const Orgenization = await deleteAllItems(res);
        res.status(200).json({Orgenization})
    }catch(error){
        res.status(500).json({error: error.message});
    }
}


module.exports = {
    getSingleOrgenization,
    getAllOrgenizations,
    createNewOrgenization,
    updatedOrgenization,
    deleteSingleOrgenization,
    deleteAllOrgenizations
}