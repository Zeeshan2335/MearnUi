import React, { useState } from "react";
import { Button, Grid, TextField } from "@mui/material";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
// console.log({ pdId: uuidv4() });

const CardCreate = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [img, setImg] = useState("");
  const [res, setRes] = useState("");

  // console.log(name, price, img);

  const UpateProduct = async () => {
    const payload = { pdId: uuidv4(), name, price, img };
    console.log("payload==>", payload);
    const result = await axios.post("http://localhost:4040/addcards", payload);
    // console.log(result.data);
    setRes(result.data);
    setName("");
    setPrice("");
    setImg("");
  };

  return (
    <>
      <h1>CardCreate</h1>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <TextField
            value={name}
            fullWidth
            variant="standard"
            label="Enter Name"
            onChange={(e) => setName(e.target.value) && setRes("")}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            value={price}
            fullWidth
            variant="standard"
            label="Enter Price"
            onChange={(e) => setPrice(e.target.value)}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            value={img}
            fullWidth
            variant="standard"
            label=" Img URL"
            onChange={(e) => setImg(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            className="btn"
            onClick={UpateProduct}
            variant="contained"
            fullWidth
          >
            Create Product
          </Button>
        </Grid>
        <Grid item xs={12}>
          <h1 style={{ backgroundColor: "green" }}> {res} </h1>
        </Grid>
      </Grid>
    </>
  );
};

export default CardCreate;
