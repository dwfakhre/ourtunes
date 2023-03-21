import { Container } from "@mui/material";
import React from "react";
import MusicCard from "../MusicCard/MusicCard";

const ResultsFeed = ({ results, basket, setBasket }) => {
  return (
    <Container>
      <div
        style={{
          height: 'auto',
  display: 'grid',
    'grid-template-columns': 'repeat(4, 1fr)',
    'row-gap': '40px',
    'column-gap': '24px',
    'padding': '0 40px',
    'margin': '15px 0 40px',
        }}
      >
        {console.log(results)}
        
          {results.map((result, i) => {
            return (
              <MusicCard data={result} basket={basket} setBasket={setBasket} />
            );
          })}
        </div>
      
    </Container>
  );
};

export default ResultsFeed;
