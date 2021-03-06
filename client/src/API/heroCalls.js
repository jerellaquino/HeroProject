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

  static addHero({ hero }) {
    return new Promise((resolve, reject) => {
      axios({
        method: "POST",
        url: "http://localhost:3001/heroes", //URL hard coded
        data: {
          name: hero.name,
          hero_name: hero.hero_name,
          age: hero.age,
          gender: hero.gender,
          img: hero.img,
          description: hero.description,
          strength: hero.strength,
          speed: hero.speed,
          hp: hero.hp,
          abilities: hero.abilities,
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

  static editHero(heroId, payload) {
    return new Promise((resolve, reject) => {
      axios({
        method: "PUT",
        url: `http://localhost:3001/heroes/${heroId}`, //URL hard coded
        data: { payload },
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

  static findById(heroId) {
    return new Promise((resolve, reject) => {
      axios({
        method: "GET",
        url: `http://localhost:3001/heroes/${heroId}`, //URL hard coded
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

  static deleteHero(heroId) {
    return new Promise((resolve, reject) => {
      axios({
        method: "DELETE",
        url: `http://localhost:3001/heroes/${heroId}`, //URL hard coded
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
