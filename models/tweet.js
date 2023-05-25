const { Schema, model } = require('mongoose');
const Joi = require('joi');
const { handleSaveErrors } = require('../helpers');

const arrayHashtags = [];

const contentSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Set name for content'],
    },
    hashtag: {
      type: String,
      enum: arrayHashtags,
      required: true,
    },
    content: {
      type: String,
      max: 280,
      required: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'user',
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

contentSchema.post('save', handleSaveErrors);

const addSchema = Joi.object({
  name: Joi.string().required(),
  hashtag: Joi.string()
    .valid(...arrayHashtags)
    .required(),
  content: Joi.string().max(280).required(),
});

const schemas = {
  addSchema,
};

const Content = model('tweet', contentSchema);

module.exports = {
  Content,
  schemas,
};
