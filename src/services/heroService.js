let nextId = 1;
const heroesDB = [{ id: 0 }];

module.exports.createHero = async (data) => {
  const newHero = { ...data, id: nextId++ };
  heroesDB.push(newHero);

  return newHero;
};

module.exports.updateHero = async (id, data) => {
  const foundHeroIdx = heroesDB.findIndex((hero) => hero.id === id);
  const foundHeroData = heroesDB[foundHeroIdx];

  if (foundHeroIdx === -1) {
    return null;
  }
  // update with req.body
  const updatedHero = {
    /* old data */ ...foundHeroData,
    /* replace with new data */ ...data,
    id: foundHeroData.id,
  };

  heroesDB[foundHeroIdx] = updatedHero;

  return updatedHero;
};

module.exports.findById = async (id) => {

}
