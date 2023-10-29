const Job = require('../models/Job');
const authJwt = require('../middlewares/authJwt')
// Create a new job
exports.addJob = async (req, res) => {
  try {
    // if (!authJwt.isEmployer(req)) {
    //   return res.status(403).json({ error: "Access forbidden. Employer role required." });
    // }
    const job = new Job(req.body);
    await job.save();
    res.status(201).json(job);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all jobs
exports.getJobs =  async (req, res) => {
  try {
    const jobs = await Job.find();
    res.status(200).json(jobs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get job by ID
exports.getJob = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    if (!job) {
      return res.status(404).json({ error: 'Job not found' });
    }
    res.status(200).json(job);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get job by Single Category or category ID
exports.getJobByCat = async (req, res) => {
  const categoryId = req.params.id;         
  try {
    const jobs = await Job.find({ category: categoryId });
    res.status(200).json(jobs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// Get job by Author
exports.fetchJobByAuthor = async (req, res) => {
  const authorId = req.params.authorId; 
  try {
    const jobs = await Job.find({ author: authorId }); 
    if (!jobs || jobs.length === 0) {
      return res.status(404).json({ error: 'No jobs found for the specified author' });
    }
    res.status(200).json(jobs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// Update job by ID
exports.updateJob = async (req, res) => {
  try {
    const job = await Job.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!job) {
      return res.status(404).json({ error: 'Job not found' });
    }
    res.status(200).json(job);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete job by ID
exports.deleteJob = async (req, res) => {
  try {
    const job = await Job.findByIdAndDelete(req.params.id);
    if (!job) {
      return res.status(404).json({ error: 'Job not found' });
    }
    res.status(200).json({ message: 'Job deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

