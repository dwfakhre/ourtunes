import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const SuccessPage = ({
  Infos,
  setInfos,
  setResults,
  handleCloseModal,
  setSearched,
}) => {
  const navigate = useNavigate();
  const handleHomeBtn = () => {
    setResults({});
    setSearched(false);
    handleCloseModal();
    setInfos({
      firstName: "",
      lastName: "",
      Address: "",
    });
    navigate("/");
  };
  return (
    <div>
      <Typography variant="h3">
        Merci {Infos.lastName} {Infos.firstName} pour avoir acheté les chansons
        chez Apple
      </Typography>
      <Button variant="contained" color="primary" onClick={handleHomeBtn}>
        Revenir à page d'accueil
      </Button>
    </div>
  );
};

export default SuccessPage;
