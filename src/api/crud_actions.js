const express = require('express');
const monk = require('monk');
const Joi = require('@hapi/joi');

const db = monk(process.env.MONGODB_URI);
const crudExample = db.get('crud-example');

const schema = Joi.object({
  key: Joi.string().trim().required(),
  value: Joi.string().trim().required(),
});

const router = express.Router();

// READ ALL
router.get('/', async (req, res, next) => {
  try {
    const items = await crudExample.find({});
    res.json(items);
  } catch (error) {
    next(error);
  }
});

// READ ONE
router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const item = await crudExample.findOne({
      _id: id
    });
    res.json(item);
  } catch (error) {
    next(error);
  }
});

// CREATE ONE
router.post('/', async (req, res, next) => {
  try {
    const value = await schema.validateAsync(req.body);
    const inserted = await crudExample.insert(value);
    res.json(inserted);
  } catch (error) {
    next(error);
  }
});

// UPDATE ONE
router.put('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const value = await schema.validateAsync(req.body);
    const item = await crudExample.findOne({
      _id: id,
    });
    if (!item) throw new Error('Item not found');
    const inserted = await crudExample.update({
      _id: id
    }, value);
    res.json(inserted);
  } catch (error) {
    next(error);
  }
});

// DELETE ONE
router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    await crudExample.remove({
      _id: id
    });
    res.json({
      message: 'Success'
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
