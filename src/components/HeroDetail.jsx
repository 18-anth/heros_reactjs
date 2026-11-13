import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { useParams } from "react-router-dom";
import "../Screens/Marvel/Marvel.css";
import "../Screens/DC/DC.css";
import HeroDataService from "../services/HeroDataService";
import HeroComments from "./HeroComments";
import ReturnButton from "./ReturnButton/ReturnButton";

export default function HeroDetail({ universe }) {
  const { hero: heroSlug } = useParams();
  const [hero, setHero] = useState(null);
  const [state, setState] = useState("loading");
  const [error, setError] = useState(null);

  useEffect(() => {
    let active = true;
    setState("loading");
    setError(null);

    HeroDataService.getById(heroSlug)
      .then((catalogHero) => {
        if (!active) return;
        if (
          !catalogHero ||
          catalogHero.universe.toLowerCase() !== universe.toLowerCase()
        ) {
          throw new Error(`No se encontró el héroe ${heroSlug} en ${universe}`);
        }
        if (!catalogHero.details) {
          throw new Error(
            `El héroe ${heroSlug} no tiene información detallada`,
          );
        }
        setHero(catalogHero);
        setState("success");
      })
      .catch((loadError) => {
        if (!active) return;
        setError(loadError);
        setState("error");
      });

    return () => {
      active = false;
    };
  }, [heroSlug, universe]);

  if (state === "loading") return <p aria-live="polite">Cargando héroe...</p>;
  if (state === "error") {
    return <p role="alert">No se pudo cargar el héroe: {error.message}</p>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <Grid container spacing={2} justifyContent="center" alignItems="stretch">
        <Grid
          item
          xs={12}
          md={6}
          lg={4}
          display="flex"
          justifyContent="center"
          sx={{
            animation: "heroDetailImageEnter 650ms ease both",
            "@keyframes heroDetailImageEnter": {
              from: {
                opacity: 0,
                transform: "translateX(-24px)",
              },
              to: {
                opacity: 1,
                transform: "translateX(0)",
              },
            },
            "@media (prefers-reduced-motion: reduce)": {
              animation: "none",
            },
          }}
        >
          <Card
            sx={{
              width: "100%",
              maxWidth: 300,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backdropFilter: "blur(10px)",
              backgroundColor: "rgba(255, 255, 255, 0.5)",
              borderRadius: "10px",
              boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
              overflow: "hidden",
              transition: "transform 300ms ease, box-shadow 300ms ease",
              "&:hover": {
                transform: "translateY(-6px)",
                boxShadow: "0 14px 30px rgba(0, 0, 0, 0.3)",
              },
              "@media (prefers-reduced-motion: reduce)": {
                transition: "none",
                "&:hover": {
                  transform: "none",
                },
              },
            }}
          >
            <CardMedia
              component="div"
              aria-label={hero.name}
              className={hero.className}
              sx={{
                width: "100%",
                objectFit: "contain",
                transition: "transform 600ms ease",
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
            />
          </Card>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          lg={8}
          sx={{
            animation: "heroDetailContentEnter 650ms 120ms ease both",
            "@keyframes heroDetailContentEnter": {
              from: {
                opacity: 0,
                transform: "translateX(24px)",
              },
              to: {
                opacity: 1,
                transform: "translateX(0)",
              },
            },
            "@media (prefers-reduced-motion: reduce)": {
              animation: "none",
            },
          }}
        >
          <Card
            sx={{
              height: "100%",
              width: "100%",
              backdropFilter: "blur(10px)",
              backgroundColor: "rgba(255, 255, 255, 0.5)",
              borderRadius: "10px",
              boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
              overflow: "hidden",
              transition: "box-shadow 300ms ease",
              "&:hover": {
                boxShadow: "0 14px 30px rgba(0, 0, 0, 0.3)",
              },
            }}
          >
            <CardContent>
              <Typography variant="h4" component="h1" gutterBottom>
                {hero.details.title}
              </Typography>
              <Typography variant="body1">
                {hero.details.description}
              </Typography>
            </CardContent>
            <CardContent>
              <iframe
                width="560"
                height="315"
                src={hero.details.videoUrl}
                title={`Video de ${hero.name}`}
                style={{ maxWidth: "100%", border: 0 }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </CardContent>
          </Card>
        </Grid>
        <HeroComments heroId={hero.slug} />
        <ReturnButton />
      </Grid>
    </div>
  );
}
