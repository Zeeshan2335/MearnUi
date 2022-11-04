import { Button, Card, CardContent, Grid } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

const ShowCard = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    const result = await axios.get("http://localhost:4040");
    console.log(result.data);
    setData(result.data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <h1>ShowCard</h1>
      <Grid container spacing={2}>
        {data.map((elem) => (
          <Grid item xs={4}>
            <Card>
              <CardContent>
                <img src={elem.img} alt="" width={200} height={200} />
                <h3>{elem.name} </h3>
                <Button variant="outlined">{elem.price} </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default ShowCard;
