const express = require('express');
const router = express.Router();
const controller = require('../controllers/CategoryController.js');

// CORS Middleware
router.use(function(req, res, next) {
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, Content-Type, Accept'
  );
  next();
});

router.post('/', controller.addCategory)
router.get('/', controller.getCategorys)
router.get('/:id', controller.getCategory)
router.put('/:id', controller.updateCategory);
router.delete('/:id', controller.deleteCategory)


module.exports = router;
