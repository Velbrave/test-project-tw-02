const express = require('express');
const { ctrlWrapper } = require('../../helpers');
const { validateBody, authenticate } = require('../../middlewares');
const { schemas } = require('../../models/tweet');
const { getAll, getById, addById, deleteById, updateById } = require('../../controllers/tweets');

const router = express.Router();

router.get('/', authenticate, ctrlWrapper(getAll));

router.get('/:id', authenticate, ctrlWrapper(getById));

router.post('/', authenticate, validateBody(schemas.addSchema), ctrlWrapper(addById));

router.put('/:id', authenticate, validateBody(schemas.addSchema), ctrlWrapper(updateById));

router.delete('/:id', ctrlWrapper(deleteById));

module.exports = router;
