import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import "../css/HEROES.css";
import dc_batman from "../heroes/dc_batman.jpg";
import ReturnButton from "../ReturnButton/ReturnButton";

export default function batman() {
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
                  image={dc_batman}
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
                <h3>I'm Batman!</h3>
              </Typography>
              <CardContent>
                <Typography variant="body1">
                  Batman (conocido inicialmente como Bat-Man y en español como
                  el Hombre Murciélago) es un personaje creado por los
                  estadounidenses Bob Kane y Bill Finger,13​ y propiedad de DC
                  Comics. Apareció por primera vez en la historia titulada «El
                  caso del sindicato químico» de la revista Detective Comics N.º
                  27, lanzada por la editorial National Publications el 30 de
                  marzo de 1939. La identidad secreta de Batman es Bruce Wayne
                  (Bruno Díaz en algunos países de habla hispana),​ un
                  multimillonario magnate empresarial y filántropo dueño de
                  Empresas Wayne en Gotham City. Después de presenciar el
                  asesinato de sus padres, el Dr.
                </Typography>
              </CardContent>
              <CardContent>
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/NLOp_6uPccQ?start=6"
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
