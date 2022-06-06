
class UserController {
    getUser(req, res, next) {
        try {
            console.log(req.params.id);
        
            res.status(200).send({ id: req.params.id });
        } catch (error) {
            next(error);
        }
    }

    createUser(req, res, next) {
        try {
            const user = { ...req.body };
        
            res.status(200).send({ data: user });
        } catch (error) {
            next(error);
        }
    }

    updateUser (req, res, next) {
        try {
            res.status(200).send({ data: 'user' });
        } catch (error) {
            next(error);
        }
    }

    deleteUser(req, res, next) {
        try {
            // res.status(200).send({ data: true });
            res.status(200).send({ data: 'user' });
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new UserController();
