import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Grid from "@mui/material/Grid";
import "../css/HEROES.css";
import dc_superman from "../heroes/dc_superman.jpg";
import CardMedia from "@mui/material/CardMedia";
import ReturnButton from "../ReturnButton/ReturnButton";

export default function superman() {
  return (
    <>
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
          <Grid
            item
            xs={12}
            md={6}
            lg={4}
            display="flex"
            justifyContent="center"
          >
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
                  image={dc_superman}
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
                <h3>Hello, I'm Superman</h3>
              </Typography>
              <CardContent>
                <Typography variant="body1">
                  Superman es un superhéroe ficticio, que apareció por primera
                  vez en los cómics estadounidenses publicados por DC
                  Comics.1​2​3​4​El personaje fue creado por el escritor
                  estadounidense Jerry Siegel y el artista canadiense Joe
                  Shuster en 1933 cuando ambos se encontraban viviendo en
                  Cleveland, Ohio. Sus creadores lo vendieron a Detective
                  Comics, Inc. en 1938 por 130 dólares 5​ y la primera aventura
                  del personaje fue publicada en Action Comics #1 (junio de
                  1938), para luego aparecer en varios seriales de radio,
                  programas de televisión, películas, tiras periódicas y
                  videojuegos.
                </Typography>
              </CardContent>
              <CardContent>
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube-nocookie.com/embed/lcjJSuRDhmQ?si=sGI2f1oaI6QHkRdP"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </CardContent>
            </Card>
          </Grid>
          <ReturnButton />
        </Grid>
      </div>
    </>
  );
}
