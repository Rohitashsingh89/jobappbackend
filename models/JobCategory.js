const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const jobCategorySchema = new Schema({
  jobId: {
    type: Schema.Types.ObjectId,
    ref: 'Job'
  },
  categoryId: {
    type: Schema.Types.ObjectId,
    ref: 'Category'
  }
});

const JobCategory = mongoose.model('JobCategory', jobCategorySchema);

module.exports = JobCategory;
