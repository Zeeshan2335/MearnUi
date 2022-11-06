import React, { useState } from "react";
import { Button, Card, CardContent, Grid, TextField } from "@mui/material";
import { useLocation } from "react-router";
import { useNavigate } from "react-router";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
// console.log({ pdId: uuidv4() });

const CardCreate = () => {
  const navigate = useNavigate();
  const dataReceived = useLocation();
  const pdId = dataReceived.state.pdId;
  const ProImg = dataReceived.state.img;
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [img, setImg] = useState("");
  const [res, setRes] = useState("");

  // console.log(name, price, img);

  const CreateProduct = async () => {
    const payload = { pdId, name, price, img };
    console.log("payload==>", payload);
    const result = await axios.post(
      "http://localhost:4040/updatecards",
      payload
    );
    navigate("/ShowCard");
  };

  return (
    <>
      <h1>Card Update</h1>
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
          <Button onClick={CreateProduct} variant="contained" fullWidth>
            Update Product
          </Button>
        </Grid>
        <Grid item xs={12}>
          <h1 style={{ backgroundColor: "green" }}> {res} </h1>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Card>
            <CardContent>
              <img src={ProImg} alt="" width={250} height={250} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default CardCreate;
