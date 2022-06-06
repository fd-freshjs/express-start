const yup = require('yup');

const paramID = yup.number().positive().required();

module.exports.middleWare = async (req, res, next) => {
  try {
    const verdict = await paramID.isValid(req.params.id);
    if (verdict) {
        return next();
    }

    const error = new Error('Validation error');
    error.status = 400;
    throw error;
  } catch (error) {
    next(error);
  }
};
