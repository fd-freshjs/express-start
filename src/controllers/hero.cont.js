const createError = require("http-errors");
const heroService = require('../services/heroService.js');

class HeroController {
  async createHero(req, res, next) {
    try {
      const data = { ...req.body, nickname: req.params.nickname, photo: req.file.filename };

      const newHero = await heroService.createHero(data);

      res.status(200).send({ data: newHero });
    } catch (error) {
      next(error);
    }
  }

  async updateHero(req, res, next) {
    try {
      const {
        body,
        file,
        params: { id }, // /path/:id/
        query: {}, // ?key=value
      } = req;

      const data = { ...body };
      if (file) {
        data.photo = file.filename;
      }

      const updatedHero = await heroService.updateHero(Number(id), data);

      res.send({ data: updatedHero });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new HeroController();
