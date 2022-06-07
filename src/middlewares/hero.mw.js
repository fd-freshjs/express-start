const createError = require('http-errors');
const yup = require('yup');
const { createMw } = require('../utils/middleware.js');
const heroService = require('../services/heroService.js');

const heroCreateSchema = yup.object().shape({
  nickname: yup.string().required().min(3).max(16),
  realName: yup.string().required().min(3).max(36),
  origin: yup.string().required().min(3).max(48),
});

const heroUpdateSchema = yup.object().shape({
  nickname: yup.string().required().min(3).max(16),
  realName: yup.string().notRequired().min(3).max(36),
  origin: yup.string().notRequired().min(3).max(48),
});

module.exports.heroCreateMW = createMw(async (req, res, next) => {
  const data = { ...req.body };

  // проверить поля !== ""
  // иначе бросать ошибку "Неверные данные"
  if (!(await heroCreateSchema.isValid(data))) {
    throw createError(400, 'Invalid data');
  }
});

module.exports.heroUpdateMW = createMw(async (req, res, next) => {
  const data = req.body;

  if (!(await heroUpdateSchema.isValid(data))) {
    throw createError(400, 'Invalid data');
  }
});

module.exports.heroExistsMW = async (req, res, next) => {
  try {
    const id = req.params.id;

    const foundHero = await heroService.findById(id);

    if (!foundHero) {
      throw createError(404, 'Hero not found');
    }

    next();
  } catch (error) {
    next(error);
  }
}
