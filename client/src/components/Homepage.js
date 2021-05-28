import React, { useState, useEffect, Component } from "react";
import heroCalls from "../API/heroCalls";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CardMedia from "@material-ui/core/CardMedia";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
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
    const homeButtonStyle = {
      color: "white",
      backgroundColor: "Crimson",
      padding: "10px",
      marginLeft: "20px",
    };

    const buttonSpacing = {
      padding: "10px",
      marginLeft: "20px",
    };

    return (
      <div className="App">
        <Router>
          <AppBar position="fixed">
            <Toolbar>
              <Typography variant="h6" color="inherit" noWrap>
                Favorite Superheroes Database
              </Typography>
              <Link to="/">
                <Button style={homeButtonStyle} variant="outlined">
                  Home / Clear Page
                </Button>
              </Link>
            </Toolbar>
          </AppBar>
          <br />
          <br />
          <br />
          <h1 color="secondary">My Favorite Superheroes!</h1>
          <Container maxWidth="md">
            <Grid
              container
              spacing={0}
              direction="column"
              alignItems="center"
              justify="center"
            >
              <Card>
                <CardMedia
                  component="img"
                  image="https://static.vecteezy.com/system/resources/previews/000/151/954/original/round-superhero-character-vector-icons.jpg"
                  alt="hero image"
                  width="200"
                  height="200"
                  title="Image title"
                ></CardMedia>
              </Card>
            </Grid>
          </Container>

          <br />
          <Route path="/findhero" component={FindHero} />
          <Link to="/findhero">
            <Button size="large" variant="outlined">
              Click to Search Hero by Id
            </Button>
          </Link>
          <br />
          <br />
          <Route path="/heroes" component={Heroes} />
          <Route path="/addhero" component={AddHero} />
          <Route path="/deletehero" component={DeleteHero} />
          <Route path="/edithero" component={EditHero} />
          <Link to="/heroes">
            <Button style={buttonSpacing} color="primary" variant="outlined">
              View All Heroes
            </Button>
          </Link>
          <Link to="/addhero">
            <Button style={buttonSpacing} color="secondary" variant="outlined">
              Add Hero
            </Button>
          </Link>
          <Link to="/edithero">
            <Button style={buttonSpacing} color="primary" variant="outlined">
              Edit Hero
            </Button>
          </Link>
          <Link to="/deletehero">
            <Button style={buttonSpacing} color="secondary" variant="outlined">
              Delete Hero
            </Button>
          </Link>
          <br />
          <br />
        </Router>
      </div>
    );
  }
}
