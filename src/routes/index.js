const getHome = (req, res) => {
    console.log(req.params.id);

    res.status(200).send({ id: req.params.id });
}
module.exports.getHome = getHome;

// es modules
// export default 
// export const func

// common js module
// module.exports.default = getHome;
// module.exports.func = getHome;
