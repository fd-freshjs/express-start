const heroesDB = [];

class HeroController {
    createHero(req, res, next) {
        try {
            const data = req.body;

            const newUser = { ...data, id: heroesDB.length };
            heroesDB.push(newUser);

            res.status(200).send({ data: newUser });
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new HeroController();
