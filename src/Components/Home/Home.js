import React, { useState, useEffect } from "react";
import Searchbar from "../SearchBar/Searchbar";
import { Box, Button, Grid, Typography, Stack, IconButton, Paper, Modal, Container } from "@mui/material";
import ResultsFeed from "../ResultsFeed/ResultsFeed";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";

const Home = ({
  handleCloseModal,
  modelOpen,
  totalPrice,
  basket,
  setBasket,
  results,
  searched,
  setResults,
  setSearched,
}) => {
  return (
    <Container>
      {searched || (
        <Typography variant="h1" color={"#212121"} sx={{ padding: "3rem" }}>
          OurTunes
        </Typography>
      )}
      {searched || (
        <Searchbar
          setResults={setResults}
          setSearched={setSearched}
          style={{
            border: "1px solid #717171",
            width: "50vw",
            borderRadius: "2rem",
            color: "white",
            outline: 0,
          }}
        />
      )}

      {searched && (
        <ResultsFeed results={results} basket={basket} setBasket={setBasket} />
      )}

      <Modal
        open={modelOpen}
        onClose={handleCloseModal}
        sx={{
          display: "flex",
          position: "fixed",

          inset: 0,
          flexGrow: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Paper sx={{}}>
          <IconButton
            onClick={handleCloseModal}
            sx={{ left: "10px", top: "10px" }}
          >
            <CloseIcon />
          </IconButton>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              padding: "20px",
                          overflowY: "scroll",
              height: '50vh'
            }}
          >
            {basket.map((item, i) => {
              return (
                <div
                  style={{
                    display: "flex",
                    height: "5rem",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    padding: "8px 20px",
                    boxShadow: "0 0 1px #717171",
                    alignItems: "center",
                    width: "27rem",
                  }}
                >
                  {console.log(item)}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      fontSize: "20px",
                      fontWeight: 600,
                      height: "100%",
                    }}
                  >
                    <img src={item.cover} height="100%" />
                    <span>{item.title}</span>
                  </div>

                  <span>Prix: {item.price * 150} DZD</span>
                </div>
              );
            })}
          </Box>
          <Stack sx={{ padding: "10px" }}>
            <Grid
              Container
              spacing={2}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
              }}
            >
              <Grid item xs={4}>
                <Typography variant="h5" sx={{ fontWeight: 500 }}>
                  Total : {(totalPrice * 160).toFixed(2)} DZD{" "}
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Link to={"/Acheter"}>
                  <Button variant="contained">Confirmer</Button>
                </Link>
              </Grid>
            </Grid>
          </Stack>
        </Paper>
      </Modal>
    </Container>
  );
};

export default Home;
