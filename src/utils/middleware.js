module.exports.createMw = (callback) => async (req, res, next) => {
    try {
        
        await callback(req, res, next);

        next();
    } catch (error) {
        next(error);
    }
}