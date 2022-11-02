import { Button, Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <br /> <br />
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Link to="/CardCreate">
            <Button variant="contained" fullWidth>
              Cards Create
            </Button>
          </Link>
        </Grid>
        <Grid item xs={4}>
          <Link to="/showCard">
            <Button variant="contained" fullWidth>
              Cards Show
            </Button>
          </Link>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
