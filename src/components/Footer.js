import React from "react";
import "./Footer.css";
import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  Link,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

function Footer() {
  return (
    <Box
      sx={{
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        
        background: "#000",
        width: "100%",
        p: 3,
        color: "#fff",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5} justifyContent="center" alignItems="center">
          <Grid item xs={12} sm={6}>
            <Typography variant="h4" component="h2">
              Para más información sobre los Heroes.
            </Typography>
            <Typography>¡Registrate ahora!, es totalmente gratis.</Typography>
            <form>
              <TextField
                fullWidth
                label="Su correo electrónico"
                name="email"
                type="email"
                variant="outlined"
                sx={{
                  mt: 2,
                  background: "#fff",
                  borderRadius: "10px",
                }}
              />
              <Button
                variant="outlined"
                sx={{ mt: 2, color: "#fff", borderColor: "#fff" }}
              >
                Registrar
              </Button>
            </form>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box>
              <Typography variant="h5">Nosotros</Typography>
              <Link
                component={RouterLink}
                to="/sign-up"
                sx={{ color: "#fff", textDecoration: "none" }}
              >
                How it works
              </Link>
              <Typography>Testimonios</Typography>
              <Typography>Careers</Typography>
              <Typography>Investors</Typography>
              <Typography>Terms of Service</Typography>
            </Box>
            <Box>
              <Typography variant="h5">Contact</Typography>
              <Typography>Support</Typography>
              <Typography>Destinations</Typography>
              <Typography>Sponsorships</Typography>
            </Box>
          </Grid>
           
        </Grid>
        <Box sx={{ mt: 5, display: "flex", justifyContent: "space-between" }}>
          <Typography>Heros © 2021</Typography>
          <Box>
            <Link component={RouterLink} to="/" sx={{ ml: 1, color: "#fff" }}>
              <FacebookIcon />
            </Link>
            <Link component={RouterLink} to="/" sx={{ ml: 1, color: "#fff" }}>
              <InstagramIcon />
            </Link>
            <Link component={RouterLink} to="/" sx={{ ml: 1, color: "#fff" }}>
              <WhatsAppIcon />
            </Link>
            {/* Agrega más íconos de redes sociales según sea necesario */}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
