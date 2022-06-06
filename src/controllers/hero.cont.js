const createError = require("http-errors");

const heroesDB = [{ id: 0 }];

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

  updateHero(req, res, next) {
    try {
      const {
        body,
        params: { id }, // /path/:id/
        query: {}, // ?key=value
      } = req; 

      // find by id
      const foundHero = heroesDB.find((hero) => hero.id === Number(id));

      if (!foundHero) {
        throw createError(404, 'Hero not found');
      }
      // update with req.body
      const updatedHero = {
        /* old data */ ...foundHero,
        /* replace with new data */ ...body,
      };

      res.send({ data: updatedHero });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new HeroController();
