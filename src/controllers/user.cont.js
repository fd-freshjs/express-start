
class UserController {
    getUser(req, res) {
        console.log(req.params.id);
    
        res.status(200).send({ id: req.params.id });
    }

    createUser(req, res) {
        const user = { name: 'Viktor', email: 'asda@mail.com' };
    
        res.status(200).send({ data: user });
    }

    updateUser (req, res) {
        res.status(200).send({ data: 'user' });
    }

    deleteUser() {
        // res.status(200).send({ data: true });
        res.status(200).send({ data: 'user' });
    }
}

module.exports = new UserController();
