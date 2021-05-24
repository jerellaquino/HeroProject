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
}

export default heroCalls;
