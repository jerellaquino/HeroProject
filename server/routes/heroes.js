const express = require("express");
const router = express.Router();
const Hero = require("../models/Hero"); //import hero model

//GETS ALL HEROES
router.get("/", async (req, res) => {
  try {
    const heroes = await Hero.find();
    res.json(heroes);
  } catch (err) {
    res.json({ message: err });
  }
});

//GET SPECIFIC HERO
router.get("/:heroId", async (req, res) => {
  try {
    const hero = await Hero.findById(req.params.heroId);
    res.json(hero);
  } catch (err) {
    res.json({ message: err });
  }
});

//CREATES A HERO
router.post("/", async (req, res) => {
  const hero = new Hero({
    name: req.body.name,
    hero_name: req.body.hero_name,
    age: req.body.age,
    gender: req.body.gender,
    img: req.body.img,
    description: req.body.description,
    strength: req.body.strength,
    speed: req.body.speed,
    hp: req.body.hp,
    abilities: req.body.abilities,
  });
  try {
    const savedHero = await hero.save(); //saves to database
    res.json(savedHero);
  } catch (err) {
    res.json({ message: err });
  }
});

//UPDATE

router.put("/:heroId", async (req, res) => {
  try {
    const updateHero = await Hero.findByIdAndUpdate(
      req.params.heroId,
      { ...req.body.payload },
      {
        new: true,
      }
    );
    res.json(updateHero);
  } catch {
    res.json({ message: err });
  }
});
/*
router.patch("/:heroId", async (req, res) => {
  try {
    const updateHero = await Hero.updateOne(
      { _id: req.params.heroId },
      { $set: { img: req.body.img } }
    );
    res.json(updateHero);
  } catch {
    res.json({ message: err });
  }
});
*/

//DELETE HERO
router.delete("/:heroId", async (req, res) => {
  try {
    const removedHero = await Hero.remove({ _id: req.params.heroId });
    res.json(removedHero);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
