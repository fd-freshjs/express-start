const yup = require('yup');

const paramID = yup.number().positive().required();

module.exports.middleWare = async (req, res, next) => {
    const verdict = await paramID.isValid(req.params.id);
    if (verdict) {
        return next();
    }

    res.status(400).send('Error');
};
