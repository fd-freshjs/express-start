const yup = require('yup');
const { createMw } = require('../utils/middleware.js');

const paramID = yup.number().positive().required();

module.exports.getByIdValidation = createMw(async (req, res, next) => {
  const verdict = await paramID.isValid(req.params.id);
  if (!verdict) {
    const error = new Error('Validation error');
    error.status = 400;
    throw error;
  }
});
