import React from "react";
import "../pages/Marvel.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Grid from "@mui/material/Grid";
import CardMedia from "@mui/material/CardMedia";
import ReturnButton from "../ReturnButton/ReturnButton";
import marvel_hawkeye from "../heroes/marvel_hawkeye.jpg";

export default function hawkeye() {
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
                  image={marvel_hawkeye}
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
                <h3>My Name is Hawkeye!</h3>
              </Typography>
              <CardContent>
                <Typography variant="body1">
                  Ojo de Halcón (Clinton Francis «Clint» Barton) (en inglés
                  Hawkeye), es un superhéroe de ficción que aparece en los
                  cómics estadounidenses publicados por Marvel Comics. Creado
                  por el escritor Stan Lee y el artista Don Heck, el personaje
                  apareció por primera vez como un villano en Tales of Suspense
                  # 57 (septiembre de 1964) y más tarde se unió a los Vengadores
                  en The Avengers # 16 (mayo de 1965). Él ha sido un miembro
                  prominente del equipo desde entonces. También ocupó el puesto
                  # 44 en la lista de los 100 mejores héroes de cómics de IGN.1
                </Typography>
              </CardContent>
              <CardContent>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/iklcRY02AhI?start=6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                
              </CardContent>
            </Card>
          </Grid>
          <ReturnButton />
        </Grid>
      </div>
    </>
  );
}
