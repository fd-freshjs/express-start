const yup = require('yup');

const paramID = yup.number().positive().required();

module.exports.middleWare = (req, res, next) => {
    const verdict = paramID.isValidSync(req.params.id);
    if (verdict) {
        return next();
    }

    res.status(400).send('Error');
};
