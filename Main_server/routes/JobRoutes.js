const express = require('express');
const router = express.Router();
const {getSingleJob, getAllJobs, createNewJob, updatedJob, deleteSingleJob, deleteAllJobs} = require('../controllers/JobControllers');

//get a single Job
router.get('/:id', getSingleJob);

// get all Jobs
router.get('/', getAllJobs);

//post a new Job
router.post('/', createNewJob);

//update a Job
router.patch('/:id', updatedJob);

//delete a Job
router.delete('/:id', deleteSingleJob);

// delete all Jobs
router.delete('/',deleteAllJobs);


module.exports = router;
