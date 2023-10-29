const express = require('express');
const router = express.Router();
const controller = require('../controllers/JobController.js');

// CORS Middleware
router.use(function(req, res, next) {
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, Content-Type, Accept'
  );
  next();
});

router.post('/', controller.addJob)
router.get('/', controller.getJobs)
router.get('/:id', controller.getJob)

router.get('/category/:id', controller.getJobByCat);
router.get('/:authorId/author', controller.fetchJobByAuthor);

router.put('/:id', controller.updateJob);
router.delete('/:id', controller.deleteJob)


module.exports = router;
