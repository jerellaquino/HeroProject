import React, { useState, useEffect, Component } from "react";
import heroCalls from "../API/heroCalls";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Heroes from "./Heroes";
import AddHero from "./AddHero";
import DeleteHero from "./DeleteHero";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
} from "react-router-dom";
import EditHero from "./EditHero";

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
          <Route path="/deletehero" component={DeleteHero} />
          <Route path="/edithero" component={EditHero} />
          <Link to="/heroes">
            <Button color="primary" variant="outlined">
              View All Heroes
            </Button>
          </Link>
          <Link to="/addhero">
            <Button color="secondary" variant="outlined">
              Add Hero
            </Button>
          </Link>
          <Link to="/edithero">
            <Button color="primary" variant="outlined">
              Edit Hero
            </Button>
          </Link>
          <Link to="/deletehero">
            <Button color="secondary" variant="outlined">
              Delete Hero
            </Button>
          </Link>
        </Router>
      </div>
    );
  }
}
