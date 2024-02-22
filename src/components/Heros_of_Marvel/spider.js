import React from "react";
import "../pages/Marvel.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Grid from "@mui/material/Grid";
import CardMedia from "@mui/material/CardMedia";
import ReturnButton from "../ReturnButton/ReturnButton";
import marvel_spider from "../heroes/marvel_spider.jpg";

export default function spider() {
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
                  image={marvel_spider}
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
                <h3>My Name is Captain America!</h3>
              </Typography>
              <CardContent>
                <Typography variant="body1">
                  Peter Benjamin Parker es un estudiante de la Escuela de
                  Ciencia y Tecnología de Midtown que, después de adquirir sus
                  habilidades a causa de la mordida de una araña radiactiva,
                  eligió combatir el crimen como el Hombre Araña. A pesar de
                  esforzarse por mantener su identidad en secreto de todos,
                  incluida su tía Maybelle, fue encontrado y reclutado por
                  Anthony Stark para unirse a la Guerra Civil de los Vengadores,
                  obteniendo un nuevo traje y tecnología a cambio. Después de
                  ayudar a Stark, Parker conservó su traje para seguir operando
                  como el Hombre Araña.
                </Typography>
              </CardContent>
              <CardContent>
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/CapAQclmVnY?start=6"
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
