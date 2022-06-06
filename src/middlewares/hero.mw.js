const createError = require('http-errors');
const yup = require('yup');

const heroCreateSchema = yup.object().shape({
    nickname: yup.string().required(),
    realName: yup.string().required(),
    origin: yup.string().required(),
});

module.exports.heroCreateMiddleware = async (req, res, next) => {
    try {
        const data = req.body;

        // проверить поля !== ""
        // иначе бросать ошибку "Неверные данные"
        if (! await heroCreateSchema.isValid(data)) {
            throw createError(400, 'Invalid data');
        }

        next();
    } catch (error) {
        next(error);
    }
};
