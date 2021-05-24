const express = require("express");
const router = express.Router();
const Hero = require("../models/Hero"); //import hero model

//GET SPECIFIC HERO
router.get("/:heroId", async (req, res) => {
  try {
    const hero = await Hero.findById(req.params.heroId);
    res.json(hero);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
