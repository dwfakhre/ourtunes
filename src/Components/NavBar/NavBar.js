import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import Searchbar from "../SearchBar/Searchbar";
const NavBar = ({ searched, setResults, setSearched, handleOpenModal }) => {
  return (
    <div className="NavBar">
      <AppBar position="static" sx={{ backgroundColor: "transparent", position: 'sticky' }}>
        <Toolbar
          sx={{
            padding: "0 20px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h6" color={"#212121"}>
            OurTunes
          </Typography>

          {searched && (
            <Searchbar
              setResults={setResults}
              setSearched={setSearched}
              style={{
                backgroundColor: "#717171",
                border: "1px solid #717171",
                width: "30vw",
                height: "8vh",
                borderRadius: "2rem",
                outline: 0,
              }}
            />
          )}
          <Button sx={{ color: "#212121" }} onClick={handleOpenModal}>
            <ShoppingCartIcon />
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
