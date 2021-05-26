import React, { useState, useEffect, Component } from "react";
import heroCalls from "../API/heroCalls";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Heroes from "./Heroes";
import AddHero from "./AddHero";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
} from "react-router-dom";

export default class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <h1>Superhero Database!</h1>
        <Router>
          <Route path="/heroes" component={Heroes} />
          <Route path="/addhero" component={AddHero} />
          <Link to="/heroes">
            <Button color="primary" variant="outlined">
              View All Heroes
            </Button>
          </Link>
          <Link to="/addhero">
            <Button color="secondary" variant="outlined">
              Add a Hero
            </Button>
          </Link>
          <Button color="" variant="outlined">
            Edit a Hero
          </Button>
        </Router>
      </div>
    );
  }
}
