import { Button, Card, CardContent, Grid, TextField } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router";

const ShowCard = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [CopyData, setCopyData] = useState([]);
  const [txt, setTxt] = useState(""); // to set the value of search input
  console.log(txt);
  const getData = async () => {
    const result = await axios.get("http://localhost:4040");
    console.log(result.data);
    setData(result.data);
    setCopyData(result.data);
  };
  const handleDelete = async (i) => {
    const result = await axios.post("http://localhost:4040/deleteCard", i);
    console.log(result.data);
    getData();
  };
  const handleRoute = (item) => {
    console.log(item);
    navigate("/CardUpate", { state: item });
  };

  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    const filtData = CopyData.filter((item) =>
      item.name.toUpperCase().includes(txt.toUpperCase())
    );
    setData(filtData);
  }, [txt]);
  return (
    <>
      {/* <h1>ShowCard</h1> */}

      <Grid container spacing={2}>
        <Grid item xs={2}></Grid>
        <Grid item xs={8}>
          <TextField
            variant="standard"
            fullWidth
            label="Search Here..."
            onChange={(e) => setTxt(e.target.value)}
          />
        </Grid>
        {data.map((elem, index) => (
          <Grid item xs={4}>
            <Card>
              <CardContent>
                <img src={elem.img} alt="" width={200} height={200} />
                <h3>{elem.name} </h3>
                <h2>{elem.price}</h2>
                <Button variant="outlined" onClick={() => handleDelete(elem)}>
                  Delete
                </Button>
                <Button variant="outlined" onClick={() => handleRoute(elem)}>
                  Update
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default ShowCard;
