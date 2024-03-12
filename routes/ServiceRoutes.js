const router = require('express').Router();
const serviceController = require('../controllers/ServiceController')


router.post("/service",serviceController.createService)
router.post("/services",serviceController.fileUpload)
router.get("/service",serviceController.getAllServices)
router.get("/services/:id",serviceController.getServiceById)
router.delete("/service/:id",serviceController.deleteService)
router.put("/service/:id",serviceController.updateService)
router.get("/service/providerid/:id",serviceController.getServiceByServiceProviderId);
router.get("/service/filter" , serviceController.FilterData);


module.exports = router


