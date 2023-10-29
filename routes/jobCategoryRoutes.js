const express = require('express');
const router = express.Router();
const jobCategoryController = require('../controllers/jobCategoryController');

// Route to associate a job with a category
router.post('/associate', async (req, res) => {
  const { jobId, categoryId } = req.body;
  try {
    await jobCategoryController.addJobToCategory(jobId, categoryId);
    res.status(201).json({ message: 'Job associated with category successfully.' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Route to get categories for a specific job
router.get('/categories/:jobId', async (req, res) => {
  const { jobId } = req.params;
  try {
    const categories = await jobCategoryController.getCategoriesForJob(jobId);
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route to get jobs for a specific category
router.get('/jobs/:categoryId', async (req, res) => {
  const { categoryId } = req.params;
  try {
    const jobs = await jobCategoryController.getJobsForCategory(categoryId);
    res.status(200).json(jobs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route to disassociate a job from a category
router.delete('/disassociate/:jobId/:categoryId', async (req, res) => {
  const { jobId, categoryId } = req.params;
  try {
    await jobCategoryController.removeJobFromCategory(jobId, categoryId);
    res.status(200).json({ message: 'Job disassociated from category successfully.' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
