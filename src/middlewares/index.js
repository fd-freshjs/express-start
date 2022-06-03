module.exports.middleWare = (req, res, next) => {
    const verdict = !isNaN(Number(req.params.id));
    if (verdict) {
        return next();
    }

    res.status(400).send('Error');
};
