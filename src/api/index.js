const express = require('express');

const crudActions = require('./crud_actions');

const router = express.Router();

router.use('/', crudActions);

module.exports = router;
