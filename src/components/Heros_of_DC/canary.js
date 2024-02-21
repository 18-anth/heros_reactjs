import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import dc_black from "../heroes/dc_black.jpg"; // Asegúrate de que la ruta sea correcta
import "../css/HEROES.css";
import { CardActionArea } from "@mui/material";
import CardContent from "@mui/material/CardContent";

export default function Canary() {
  return (
    <div
 
      style={{
        padding: "20px",
        justifyContent: "center",
        alignContent: "center",
        textAlign: "center",
        alignItems: "center",
      }}
    >
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item xs={12} md={6} lg={4} display="flex" justifyContent="center">
          <Card
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backdropFilter: "blur(10px)",
              backgroundColor: "rgba(255, 255, 255, 0.5)",
              borderRadius: "10px",
              boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",

              overflow: "hidden",
            }}
          >
            <CardActionArea
              style={{
                justifyContent: "center",
                alignContent: "center",
                textAlign: "center",
                alignItems: "center",
              }}
            >
              <CardMedia
                component="img"
                image={dc_black}
                alt="Black Canary"
                sx={{ Width: "100%", maxHeight: 530, objectFit: "contain" }}
              />
            </CardActionArea>
          </Card>
        </Grid>
        <Grid
          item
          xs={12}
          sm={8}
          md={6}
          container
          style={{
            justifyContent: "center",
            alignContent: "center",
            textAlign: "center",
            alignItems: "center",
          }}
        >
          <Card
            sx={{ height: "100%", width: "100%" }}
            style={{
              justifyContent: "center",
              alignContent: "center",
              textAlign: "center",
              alignItems: "center",
              backdropFilter: "blur(10px)",
              backgroundColor: "rgba(255, 255, 255, 0.5)",
              borderRadius: "10px",
              boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
              overflow: "hidden",
            }}
          >
            <Typography variant="h3" component="h3" gutterBottom>
              Hello, I'm Black Canary
            </Typography>
            <CardContent>
              <Typography variant="body1">
                Canario Negro (en inglés, Black Canary) es una superheroína
                ficticia que aparece en los cómics estadounidenses publicados
                por DC Comics. Creado por el equipo de escritores y artistas de
                Robert Kanigher y Carmine Infantino, el personaje debutó en
                Flash Comics #86 (agosto de 1947). Una de los primeros
                super-heroínas de DC, Canario Negro ha aparecido en muchas de
                las insignias de la compañía Team-Up títulos como Sociedad de la
                Justicia de América y la Liga de la Justicia de América. Desde
                finales de la década de 1960, el personaje ha sido emparejado
                con el superhéroe arquero Flecha Verde, profesional y
                románticamente.
              </Typography>
            </CardContent>

            <CardContent>
              <div>
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/D6JakLqmTdg?start=6"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
