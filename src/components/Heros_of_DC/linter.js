import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import "../css/HEROES.css";
import ReturnButton from "../ReturnButton/ReturnButton";
import dc__green from "../heroes/dc_green.jpg";

export default function linter() {
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
                  image={dc__green}
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
              <Typography variant="h4" component="h4" gutterBottom>
                Hello, My Name is green Later
              </Typography>
              <CardContent>
                <Typography variant="body1">
                  Linterna Verde (en inglés: Green Lantern) es el alias de
                  varios superhéroes de la ficción del Universo DC, los cuales
                  se caracterizan por un anillo de poder y la capacidad de crear
                  manifestaciones de luz sólida con los susodichos anillos. El
                  primer Linterna Verde (Alan Scott) hizo su debut en julio de
                  1940 en el All-American Comics #16 (portada de Sheldon
                  Moldoff) durante la Edad de Oro del Cómic estadounidense.1​ Su
                  creación se la debemos al guionista Bill Finger y al dibujante
                  Martín Nodell.
                </Typography>
              </CardContent>

              <CardContent>
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/7-GO9fo9DtM?start=6"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
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
