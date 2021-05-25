import React, { useState, useEffect, Component } from "react";
import heroCalls from "../API/heroCalls";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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
          <Button
            component={Link}
            to="/heroes"
            color="primary"
            variant="outlined"
          >
            View All Heroes
          </Button>
          <Button color="secondary" variant="outlined">
            Add a Hero
          </Button>
        </Router>
      </div>
    );
  }
}
