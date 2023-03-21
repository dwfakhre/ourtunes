import React, {  useState } from "react";
import { Card, Grid, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
const MusicCard = ({ data, basket, setBasket }) => {
  const [added, setAdded] = useState(false);
  const [btnContent, setBtnContent] = useState({
    content: (
      <>
        <span>
          <AddIcon />
        </span>
        <span>{data.price * 150} DZD</span>
      </>
    ),
    color: "green",
  });

  const handleAddbtn = (e) => {
    e.preventDefault();
    if (!added) {
      setBtnContent({
        content: (
          <span style={{ fontSize: "16px", color: "white", fontWeight: "400" }}>
            Supprimer
          </span>
        ),
        color: "red",
      });
      setAdded(true);

      let temp = basket;
      temp.push(data);
      setBasket(temp);
    } else {
      setBtnContent({
        content: (
          <>
            <span>
              <AddIcon />
            </span>
            <span>{data.price * 150} DZD</span>
          </>
        ),
        color: "green",
      });
      setAdded(false);
        
        
      
          const temp = basket.filter((item) => item.id !== data.id);
          setBasket(temp);
      

      
    }
  };
  return (
    <div
      style={{
        boxShadow: "0 0 2px black",
        position: "relative",
        padding: "10px",
        justifyContent: "space-between",
        display: "flex",
        flexDirection: "column",
      }}
    >
      
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Grid item align="center" xs={4}>
          <img src={data.cover} height="100%" width="100%" />
        </Grid>
        <Grid item align="center" xs={8}>
          <Typography component="h5" variant="h5">
            Titre: {data.title}
          </Typography>
          <Typography color="textSecondary" variant="subtitle1">
            Artiste: {data.artist}
          </Typography>
          <Typography color="textSecondary" variant="subtitle1">
            Nom d'Album: {data.album}
          </Typography>
        </Grid>
      </div>

      <button
        style={{
          bottom: "10px",
          alignItems: "center",
          justifyContent: "space-evenly",
          display: "flex",
          backgroundColor: btnContent.color,
          cursor: "pointer",
          border: 0,
          height: "40px",
        }}
        value={data.id}
        onClick={handleAddbtn}
      >
        {btnContent.content}
      </button>
    </div>
  );
};

export default MusicCard;
