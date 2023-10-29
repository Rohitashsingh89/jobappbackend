const JobCategory = require('../models/JobCategory.js');

exports.addJobToCategory = async (jobId, categoryId) => {
  const jobCategory = new JobCategory({
    jobId: jobId,
    categoryId: categoryId
  });
  await jobCategory.save();
};

exports.getCategoriesForJob = async (jobId) => {
  const jobCategories = await JobCategory.find({ jobId: jobId }).populate('categoryId');
  return jobCategories.map(jobCategory => jobCategory.categoryId);
};

exports.getJobsForCategory = async (categoryId) => {
  const jobCategories = await JobCategory.find({ categoryId: categoryId }).populate('jobId');
  return jobCategories.map(jobCategory => jobCategory.jobId);
};

exports.removeJobFromCategory = async (jobId, categoryId) => {
  await JobCategory.findOneAndDelete({ jobId: jobId, categoryId: categoryId });
};
