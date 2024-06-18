const express = require('express');
const router = express.Router();
const {getSingleOrgenization, getAllOrgenizations, createNewOrgenization, updatedOrgenization, deleteSingleOrgenization, deleteAllOrgenizations} = require('../controllers/organizationControllers');

//get a single Organization
router.get('/:id', getSingleOrgenization);

// get all organizations
router.get('/', getAllOrgenizations);

//post a new organization
router.post('/', createNewOrgenization);

//update a Organization
router.patch('/:id', updatedOrgenization);

//delete a organization
router.delete('/:id', deleteSingleOrgenization);

// delete all Organizaitons
router.delete('/',deleteAllOrgenizations);


module.exports = router;
