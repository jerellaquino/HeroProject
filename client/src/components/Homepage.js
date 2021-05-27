import React, { useState, useEffect, Component } from "react";
import heroCalls from "../API/heroCalls";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import SearchBar from "material-ui-search-bar";
import Heroes from "./Heroes";
import AddHero from "./AddHero";
import DeleteHero from "./DeleteHero";
import EditHero from "./EditHero";
import FindHero from "./FindHero";
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
        <AppBar position="relative">
          <Toolbar>
            <Typography variant="h6" color="inherit" noWrap>
              Favorite Superheroes Database
            </Typography>
          </Toolbar>
        </AppBar>
        <h1>My Favorite Superheroes!</h1>
        <br />
        <FindHero />
        <br />
        <Router>
          <Route path="/heroes" component={Heroes} />
          <Route path="/addhero" component={AddHero} />
          <Route path="/deletehero" component={DeleteHero} />
          <Route path="/edithero" component={EditHero} />
          <Route path="/heroes/findhero" component={FindHero} />
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
          <br />
          <Link to="/">
            <Button color="" variant="outlined">
              Home
            </Button>
          </Link>
        </Router>
      </div>
    );
  }
}
