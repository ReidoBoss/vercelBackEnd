module.exports = (app) => {
  
  const propertiesController = require('../controllers/megaland.controllers.js');
  const agentsController = require('../controllers/megaland.controllers.js');
  const router = require('express').Router();
  const multer = require('multer');
  const storage = multer.memoryStorage(); 
  const upload = multer({ storage: storage });


  router.post('/addProperty', upload.single('image_data'), propertiesController.addNewProperty);
  router.post("/agents", agentsController.addAgent);
  router.get("/", propertiesController.getLatestProperty);
  router.get("/all/:page", propertiesController.getAllProperty);
  router.get("/getAgents", propertiesController.getAgents);
  router.get("/getPropertyDetails/:id", propertiesController.getPropertyDetails);

  app.use('/api', router);
};
