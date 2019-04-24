const router = require('express').Router();
const championController = require('../controller/champion');

router.get('/champions/:name', championController.getChampion);

router.get('/champions', championController.getChampionList);

router.post('/champion', championController.createChampion);

module.exports = router;
