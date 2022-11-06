import { Button, Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <br /> <br />
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Link className="btn" to="/CardCreate">
            <Button className="btn" variant="contained" fullWidth>
              Cards Create
            </Button>
          </Link>
        </Grid>
        <Grid item xs={4}>
          <Link className="btn" to="/ShowCard">
            <Button className="btn" variant="contained" fullWidth>
              Cards Show
            </Button>
          </Link>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
