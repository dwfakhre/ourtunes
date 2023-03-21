import { Box, IconButton, TextField } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import React, { useState } from "react";
import axios from "axios";

const Searchbar = ({ setResults, setSearched, style }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };
  const handleDelete = () => {
    setSearchTerm("");
  };
  const handleSearchSubmit = async () => {
    const results = await axios
      .get(`https://itunes.apple.com/search?term=${searchTerm}&country=US`)
      .then((res) => res.data.results);

    const data = [];
    results.map((result, i) => {
      if (result.kind === "song") {
        data.push({
          id: result.trackId,
          title: result.trackName,
          album: result.collectionName,
          artist: result.artistName,
          cover: result.artworkUrl100,
          price: result.trackPrice,
        });
      }
    });

    setResults(data);
      setSearched(true);
      setSearchTerm('')
  };
  return (
    <Box
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
          <TextField
              placeholder="Search"
        variant="outlined"
        onChange={handleSearchChange}
              sx={style}
              
        inputProps={{
          endAdornment: (
            <IconButton onClick={handleDelete}>
              <CloseIcon />
            </IconButton>
          ),
        }}
      ></TextField>
      <IconButton onClick={handleSearchSubmit} >
        <SearchIcon />
      </IconButton>
    </Box>
  );
};

export default Searchbar;
