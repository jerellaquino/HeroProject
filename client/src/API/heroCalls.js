import axios from "axios";
//import { response } from "express";

class heroCalls {
  static getAllHeroes() {
    return new Promise((resolve, reject) => {
      axios({
        method: "GET",
        url: "http://localhost:3001/heroes", //URL hard coded
      })
        .then((response) => {
          console.log(response);
          resolve(response);
        })
        .catch((err) => {
          reject(err);
          console.log(err);
        });
    });
  }

  static addHero(
    Name,
    Hero_name,
    Age,
    Gender,
    Img,
    Description,
    Strength,
    Speed,
    Hp,
    Abilities
  ) {
    return new Promise((resolve, reject) => {
      axios({
        method: "POST",
        url: "http://localhost:3001/heroes", //URL hard coded
        hero: {
          name: Name,
          hero_name: Hero_name,
          age: Age,
          gender: Gender,
          img: Img,
          description: Description,
          strength: Strength,
          speed: Speed,
          hp: Hp,
          abilities: Abilities,
        },
      })
        .then((response) => {
          console.log(response);
          resolve(response);
        })
        .catch((err) => {
          reject(err);
          console.log(err);
        });
    });
  }
}

export default heroCalls;
