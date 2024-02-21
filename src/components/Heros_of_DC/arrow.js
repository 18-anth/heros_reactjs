import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Grid from "@mui/material/Grid";
import "../css/HEROES.css";
import dc_arrow from "../heroes/dc_arrow.jpg";
import CardMedia from "@mui/material/CardMedia";
import ReturnButton from "../ReturnButton/ReturnButton";

function arrow() {
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
              height: "100%",
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
                image={dc_arrow}
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
            <Typography variant="h5">
              <h3>I'M Green Arrow!</h3>
            </Typography>
            <CardContent>
              <Typography variant="body1">
                Green Arrow es un superhéroe que aparece en los cómics
                publicados por DC Comics. Creado por Mort Weisinger y diseñado
                por George Papp, apareció por primera vez en More Fun Comics #73
                en noviembre de 1941. Su nombre real es Oliver Jonas Queen, un
                empresario adinerado y propietario de Industrias Queen que
                también es una celebridad muy conocida en Star City. A veces se
                muestra vestido como el personaje de Robin Hood, Green Arrow es
                un arquero que usa sus habilidades para combatir el crimen en
                sus ciudades natales de Star City y Seattle, así como junto a
                sus compañeros superhéroes como miembro de la Liga de la
                Justicia.
              </Typography>
            </CardContent>
            <CardContent>
              <div>
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/hjkzEHYATtE?start=6"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <ReturnButton />
      </Grid>
      
    </div>
  );
}

export default arrow;
