import { Grid } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

const ShowCard = () => {
  const [api, setApi] = useState([]);
  const getData = async () => {
    const result = await axios.get("http://localhost:4040");
    console.log(result.data);
    setApi(result.data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      {/* <h1>ShowCard</h1> */}
      <Grid container spacing={2}>
        {api.length > 0 &&
          api.map((item) => (
            <Grid item xs={4}>
              <h1> {item.name}</h1>
              <img src={item.img} width="200px" height="250px" alt="" />
            </Grid>
          ))}
      </Grid>
    </>
  );
};

export default ShowCard;
