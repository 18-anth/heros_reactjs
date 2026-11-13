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

  if (state === "loading")
    return <p aria-live="polite">Cargando catálogo...</p>;
  if (state === "error") {
    return <p role="alert">No se pudo cargar el catálogo: {error.message}</p>;
  }
  if (state === "empty") return <p>No hay personajes disponibles.</p>;

  return (
    <Grid container spacing={1} justifyContent="center" alignItems="center">
      {heroes.map((hero, index) => (
        <Grid
          item
          key={hero.id}
          xs={12}
          md={4}
          lg={3}
          display="flex"
          justifyContent="center"
          sx={{
            animation: "heroCardEnter 500ms ease both",
            animationDelay: `${index * 70}ms`,
            "@keyframes heroCardEnter": {
              from: {
                opacity: 0,
                transform: "translateY(18px) scale(0.98)",
              },
              to: {
                opacity: 1,
                transform: "translateY(0) scale(1)",
              },
            },
            "@media (prefers-reduced-motion: reduce)": {
              animation: "none",
            },
          }}
        >
          <Card
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              maxWidth: 300,
              backdropFilter: "blur(10px)",
              backgroundColor: "rgb(0, 0, 0)",
              borderRadius: "10px",
              boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
              height: "100%",
              overflow: "hidden",
              transition:
                "transform 300ms ease, box-shadow 300ms ease, background-color 300ms ease",
              "&:hover": {
                transform: "translateY(-8px)",
                boxShadow: "0 14px 30px rgba(0, 0, 0, 0.35)",
                backgroundColor: "rgb(18, 18, 18)",
              },
              "@media (prefers-reduced-motion: reduce)": {
                transition: "none",
                "&:hover": {
                  transform: "none",
                },
              },
            }}
          >
            <Link
              to={`/${universe.toLowerCase()}/${hero.slug}`}
              style={{
                color: "#f4f4f4",
                textDecoration: "none",
                display: "block",
                width: "100%",
              }}
            >
              <CardActionArea sx={{ width: "100%" }}>
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
                  sx={{
                    width: "100%",
                    objectFit: "contain",
                    transition: "transform 500ms ease",
                    "&:hover": {
                      transform: "scale(1.03)",
                    },
                    "@media (prefers-reduced-motion: reduce)": {
                      transition: "none",
                      "&:hover": {
                        transform: "none",
                      },
                    },
                  }}
                  className={`${hero.class_name || hero.className} hero-media`}
                />
              </CardActionArea>
            </Link>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
