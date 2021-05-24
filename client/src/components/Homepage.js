import React, { useState, useEffect, Component } from "react";
import heroCalls from "../API/heroCalls";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";

export default class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heroes: ["hero 1"],
    };
  }

  componentDidMount = () => {
    heroCalls.getAllHeroes().then((data) => {
      console.log(data);
      this.setState({ heroes: data });
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Homepage!</h1>
        {this.state.heroes}
      </div>
    );
  }
}
