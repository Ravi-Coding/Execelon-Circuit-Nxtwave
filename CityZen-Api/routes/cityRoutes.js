const express = require('express')
const router = express.Router();
const cityController = require("../controllers/cityController");

router.post('/',cityController.addCity);
router.put('/:id',cityController.updateCity);
router.delete('/:id',cityController.deleteCity);
router.get('/',cityController.getCities);

module.exports = router;

