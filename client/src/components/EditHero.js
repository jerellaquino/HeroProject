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

export default class EditHero extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heroId: 0,
      param: "",
      edit: "",
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const updatePackage = {
      [this.state.param]: this.state.edit,
    };

    heroCalls.editHero(this.state.heroId, updatePackage).then((data) => {
      console.log(data);
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Edit a Hero</h1>
        <form className="flex-container">
          <TextField
            id="hero-id"
            name="heroId"
            label="Enter Hero ID"
            type="text"
            variant="outlined"
            onChange={this.handleChange}
          />
          <br />
          <TextField
            id="filled-multiline-flexible"
            label="Paramter to change"
            name="param"
            type="text"
            multiline
            rowsMax={4}
            variant="filled"
            onChange={this.handleChange}
          />
          <br />
          <TextField
            id="filled-multiline-flexible"
            label="Change to make"
            name="edit"
            type="text"
            multiline
            rowsMax={4}
            variant="filled"
            onChange={this.handleChange}
          />
          <br />
          <Button variant="outlined" onClick={this.handleSubmit}>
            Submit the Edit
          </Button>
        </form>
      </div>
    );
  }
}
