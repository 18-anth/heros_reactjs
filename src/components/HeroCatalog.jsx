import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import HeroDataService from "../services/HeroDataService";

export default function HeroCatalog({ universe }) {
  const [heroes, setHeroes] = useState([]);
  const [state, setState] = useState("loading");
  const [error, setError] = useState(null);

  useEffect(() => {
    let active = true;
    setState("loading");
    HeroDataService.getHeroes(universe)
      .then((catalog) => {
        if (!active) return;
        setHeroes(catalog);
        setState(catalog.length ? "success" : "empty");
      })
      .catch((loadError) => {
        if (!active) return;
        setError(loadError);
        setState("error");
      });
    return () => {
      active = false;
    };
  }, [universe]);

  if (state === "loading") return <p aria-live="polite">Cargando catálogo...</p>;
  if (state === "error") {
    return <p role="alert">No se pudo cargar el catálogo: {error.message}</p>;
  }
  if (state === "empty") return <p>No hay personajes disponibles.</p>;

  return (
    <Grid container spacing={1} justifyContent="center" alignItems="center">
      {heroes.map((hero) => (
        <Grid
          item
          key={hero.id}
          xs={12}
          md={2}
          lg={3}
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
            <Link to={hero.href} style={{ textDecoration: "none" }}>
              <CardActionArea>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    style={{ textAlign: "center", margin: "0 20px" }}
                  >
                    {hero.name}
                  </Typography>
                </CardContent>
                <CardMedia
                  component="div"
                  aria-label={hero.name}
                  className={hero.class_name || hero.className}
                  sx={{
                    width: "100%",
                    maxHeight: 530,
                    objectFit: "contain",
                  }}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    style={{
                      textAlign: "center",
                      margin: "0 20px",
                      color: "#3E27BE",
                      fontWeight: "700",
                    }}
                  >
                    {hero.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Link>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
