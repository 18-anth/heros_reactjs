import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Grid from "@mui/material/Grid";
import CardMedia from "@mui/material/CardMedia";
import "../css/HEROES.css";
import ReturnButton from "../ReturnButton/ReturnButton";
import dc_wonder from "../heroes/dc_wonder.jpg";

export default function wonder() {
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
                  image={dc_wonder}
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
                <h3>Hi, My Name is Dyana Prince</h3>
              </Typography>
              <CardContent>
                <Typography variant="body1">
                  La Mujer Maravilla (en inglés: Wonder Woman) es una
                  superheroína ficticia creada por William Moulton Marston para
                  la editorial DC Comics. Es una princesa guerrera de las
                  Amazonas, pueblo ficticio basado en el de las amazonas de la
                  mitología griega. En su tierra natal es conocida como la
                  princesa Diana de Temiscira pero fuera de esta utiliza la
                  identidad secreta de Diana Prince. Está dotada de una amplia
                  gama de poderes superhumanos y habilidades de combate de
                  batalla superiores, gracias a sus dones obtenidos de los
                  dioses y su amplio entrenamiento.
                </Typography>
              </CardContent>
              <CardContent>
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/1Q8fG0TtVAY?start=6"
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
