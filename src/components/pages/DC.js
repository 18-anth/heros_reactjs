import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Grid from "@mui/material/Grid";
import "./DC.css";
import { Link } from "react-router-dom";

const heroData = [
  {
    name: "Arrow",
    imageUrl: "../heroes/dc_arrow.jpg",
    className: "images_arrow",
    description: "See More",
    href: "/arrow",
  },
  {
    name: "Batman",
    imageUrl: "../heroes/dc_arrow.jpg",
    className: "images_batman",
    description: "See More",
    href: "/batman",
  },
  {
    name: "Canary",
    imageUrl: "../heroes/dc_arrow.jpg",
    className: "images_black",
    description: "See More",
    href: "/canary",
  },
  {
    name: "Blue",
    imageUrl: "../heroes/dc_arrow.jpg",
    className: "images_blue",
    description: "See More",
    href: "/blue",
  },
  {
    name: "Flash",
    imageUrl: "../heroes/dc_arrow.jpg",
    className: "images_flash",
    description: "See More",
    href: "/flash",
  },
  {
    name: "Linter",
    imageUrl: "../heroes/dc_arrow.jpg",
    className: "images_green",
    description: "See More",
    href: "/linter",
  },
  {
    name: "Martian",
    imageUrl: "../heroes/dc_arrow.jpg",
    className: "images_martian",
    description: "See More",
    href: "/martian",
  },
  {
    name: "Robin",
    imageUrl: "../heroes/dc_arrow.jpg",
    className: "images_robin",
    description: "See More",
    href: "/robin",
  },
  {
    name: "Superman",
    imageUrl: "../heroes/dc_arrow.jpg",
    className: "images_superman",
    description: "See More",
    href: "/superman",
  },
  {
    name: "Wonder",
    imageUrl: "../heroes/dc_arrow.jpg",
    className: "images_wonder",
    description: "See More",
    href: "/wonder",
  },
];

function DC() {
  return (
    <>
      <div
      >
        <br />
        <Grid container 
        spacing={1} 
        justifyContent="center" 
        alignItems="center">
          {heroData.map((hero, index) => (
            <Grid
              item
              xs={12}
              md={2}
              lg={3}
              display="flex"
              justifyContent="center"
            >
              <Card
                key={index}
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
                        style={{
                          justifyContent: "center",
                          alignContent: "center",
                          textAlign: "center",
                          alignItems: "center",
                          margin: "0 20px",
                        }}
                      >
                        {hero.name}
                      </Typography>
                    </CardContent>
                    <CardMedia
                      sx={{
                        Width: "100%",
                        maxHeight: 530,
                        objectFit: "contain",
                      }}
                      alt={hero.name}
                      className={`${hero.className}`}
                    
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        style={{
                          justifyContent: "center",
                          alignContent: "center",
                          textAlign: "center",
                          alignItems: "center",
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
      </div>
    </>
  );
}
export default DC;
