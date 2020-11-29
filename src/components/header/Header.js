import React from "react";
import { NavLink } from "react-router-dom";
import SignButton from "../signButton/SignButton";
import { Container, IconButton, Typography } from '@material-ui/core'
import './header.css';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 5
  },
  menuLink: {
    marginRight: theme.spacing(5),
    marginBottom: 25,
    padding: 5,
    margin: 5,

  },
  title: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 5,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 20px',
  },
}))

const Header = () => {
  const classes = useStyles();
  return (
    <header className="header">

      <Container>

        <IconButton edge="start" aria-label="menu" className={classes.menuLink}>
          <NavLink to="/">
            <Typography variant="h5" className={classes.title}>Home</Typography>
          </NavLink>
        </IconButton>


        <IconButton aria-label="menu" className={classes.menuLink}>
          <NavLink to="/profile">
            <Typography variant="h5" className={classes.title}>Profile</Typography>
          </NavLink>
        </IconButton>

        <IconButton aria-label="menu" className={classes.menuLink}>
          <NavLink to="/news" >
            <Typography variant="h5" className={classes.title}>News</Typography>
          </NavLink>
        </IconButton>

        <IconButton aria-label="menu" className={classes.menuLink}>
          <NavLink to="/weather" >
            <Typography variant="h5" className={classes.title}>Weather</Typography>
          </NavLink>
        </IconButton>
      </Container>
      <SignButton />

    </header>
  );
};

export default Header;