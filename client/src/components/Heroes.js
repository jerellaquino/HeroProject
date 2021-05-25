import React, { useState, useEffect, Component } from "react";
import heroCalls from "../API/heroCalls";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";

export default class Heroes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heroes: ["hero 1"],
    };
  }

  componentDidMount = () => {
    heroCalls.getAllHeroes().then((data) => {
      console.log(data);
      this.setState({ heroes: data.data });
    });
  };

  render() {
    return (
      <div className="App">
        <h1>All Heroes</h1>
        {this.state.heroes.map((data) => {
          return (
            <div>
              <ul>
                <li>
                  <img
                    src={data.img}
                    alt="hero image"
                    width="200"
                    height="200"
                  />
                </li>
                <li>Name = {data.name}</li>
                <li>Description = {data.description}</li>
                <li>Age = {data.age}</li>
                <li>Gender = {data.gender}</li>
                <li>Hero Name = {data.hero_name}</li>
                <li>Strength = {data.strength}</li>
                <li>Speed = {data.speed} </li>
                <li>HP = {data.hp} </li>
                <li>Abilities = {data.abilities}</li>
                <li>ID = {data._id} </li>
              </ul>
            </div>
          );
        })}
      </div>
    );
  }
}
