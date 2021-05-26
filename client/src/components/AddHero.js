import React, { useState, useEffect, Component } from "react";
import heroCalls from "../API/heroCalls";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Homepage from "./Homepage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
} from "react-router-dom";

export default class AddHero extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      hero_name: "",
      age: 0,
      gender: "",
      img: "",
      description: "",
      speed: 0,
      strength: 0,
      hp: 0,
      abilities: "",
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("submit successful");

    const hero = {
      name: this.state.name,
      hero_name: this.state.hero_name,
      age: this.state.age,
      gender: this.state.gender,
      img: this.state.img,
      description: this.state.description,
      strength: this.state.strength,
      speed: this.state.speed,
      hp: this.state.hp,
      abilities: this.state.abilities,
    };
    console.log({ hero });

    heroCalls
      .addHero(
        hero.name,
        hero.hero_name,
        hero.age,
        hero.gender,
        hero.img,
        hero.description,
        hero.strength,
        hero.speed,
        hero.hp,
        hero.abilities
      )
      .then((data) => {
        console.log(data);
      });
  };

  render() {
    return (
      <div className="App">
        <h1>Add</h1>
        <form className="flex-container" onSubmit={this.handleSubmit}>
          <label>Name:</label>
          <input type="text" name="name" onChange={this.handleChange} />
          <br />
          <label>Hero Name:</label>
          <input type="text" name="hero_name" onChange={this.handleChange} />
          <br />
          <label>Age:</label>
          <input type="text" name="age" onChange={this.handleChange} />
          <br />
          <label>Gender:</label>
          <input type="text" name="gender" onChange={this.handleChange} />
          <br />
          <label>Image URL:</label>
          <input
            placeholder="optional"
            name="img"
            onChange={this.handleChange}
          />{" "}
          <br />
          <TextField
            id="filled-multiline-flexible"
            label="Description"
            multiline
            rowsMax={4}
            onChange={this.handleChange}
            variant="filled"
          />
          <br />
          <label>Attributes</label>
          <input
            type="text"
            placeholder="Strength"
            name="strength"
            onChange={this.handleChange}
          />
          <br />
          <input
            type="text"
            placeholder="Speed"
            name="speed"
            onChange={this.handleChange}
          />
          <br />
          <input
            type="text"
            placeholder="HP"
            name="hp"
            onChange={this.handleChange}
          />
          <br />
          <input
            type="text"
            placeholder="Abilities"
            name="abilities"
            onChange={this.handleChange}
          />
          <br />
          <Button type="submit" variant="outlined">
            Submit to Database
          </Button>
        </form>
      </div>
    );
  }
}
