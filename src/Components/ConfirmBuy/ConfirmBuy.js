import { Container,TextField, Grid, Box, Button, Typography } from '@mui/material'
import React  from 'react'
import { useNavigate } from 'react-router-dom';
const ConfirmBuy = ({basket, Total, setInfos, Infos, setBasket}) => {
    const navigate = useNavigate();
    const handleSubmit = () => {
        
        setBasket([]);
        navigate('/Succes')
    }
  return (
    <Container sx={{ padding: "40px, 50px", position: "relative" }}>
      <Grid
        Container
        spacing={4}
        sx={{
          display: "flex",
          padding: "40px, 50px",
          justifyContent: "space-between",
          gap: "50px",
          alignItems: "center",
        }}
      >
        <Grid item xs={12} sx={{ display: "block" }}>
          <Box sx={{ overflowY: "auto", height: "80vh" }}>
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

                  <span>Prix: {(item.price * 150).toFixed(2)} DZD</span>
                </div>
              );
            })}
          </Box>
          <Grid item xs={4}>
            <Typography variant="h5" sx={{ fontWeight: 500 }}>
              Total : {(Total * 150).toFixed(2)} DZD{" "}
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={8}>
          <Box>
            <Typography variant="h5">
              Veuillez remplir vos informations personnelles pour compléter
              l'achat
            </Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                label="Prenom"
                value={Infos.firstName}
                onChange={(e) => {
                  setInfos({ ...Infos, firstName: e.target.value });
                }}
                margin="normal"
                variant="outlined"
                fullWidth
                required
              />
              <TextField
                label="Nom"
                value={Infos.lastName}
                onChange={(e) => {
                  setInfos({ ...Infos, lastName: e.target.value });
                }}
                margin="normal"
                variant="outlined"
                fullWidth
                required
              />
              <TextField
                label="Adresse"
                value={Infos.Address}
                onChange={(e) => {
                  setInfos({ ...Infos, Address: e.target.value });
                }}
                margin="normal"
                variant="outlined"
                fullWidth
                required
              />
              <Button type="submit" variant="contained" color="primary">
                Acheter
              </Button>
            </form>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default ConfirmBuy