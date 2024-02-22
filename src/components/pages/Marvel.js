import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Grid from "@mui/material/Grid";

import "./Marvel.css";
import { Link } from "react-router-dom";

const heroesData_Marvel = [
  {
    name: "Captain",
    className: "images_captain",
    description: "See More",
    href: "/captain",
  },
  {
    name: "Cyclops",
    className: "images_cyclops",
    description: "See More",
    href: "/cyclops",
  },
  {
    name: "Daredevil",
    className: "images_daredevil",
    description: "See More",
    href: "/daredevil",
  },
  {
    name: "Hawkeye",
    className: "images_hawkeye",
    description: "See More",
    href: "/hawkeye",
  },
  {
    name: "Hulk",
    className: "images_hulk",
    description: "See More",
    href: "/hulk",
  },
  {
    name: "Iron",
    className: "images_iron",
    description: "See More",
    href: "/iron",
  },
  {
    name: "Silver",
    className: "images_silver",
    description: "See More",
    href: "/silver",
  },
  {
    name: "Spider",
    className: "images_spider",
    description: "See More",
    href: "/spider",
  },
  {
    name: "Thor",
    className: "images_thor",
    description: "See More",
    href: "/thor",
  },
  {
    name: "Wolverine",
    className: "images_wolverine",
    description: "See More",
    href: "/wolverine",
  },
];

function Marvel() {
 
  return (
    <>
      <div>
        <br />
        <Grid container spacing={1} justifyContent="center" alignItems="center">
          {heroesData_Marvel.map((heroesData_Marvel, index) => (
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
                <Link
                  to={heroesData_Marvel.href}
                  style={{ textDecoration: "none" }}
                >
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
                        {heroesData_Marvel.name}
                      </Typography>
                    </CardContent>
                    <CardMedia
                      alt={heroesData_Marvel.name}
                      className={`${heroesData_Marvel.className}`}
                      sx={{
                        Width: "100%",
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
                          justifyContent: "center",
                          alignContent: "center",
                          textAlign: "center",
                          alignItems: "center",
                          margin: "0 20px",
                          color: "#3E27BE",
                          fontWeight: "700",
                        }}
                      >
                        {heroesData_Marvel.description}
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

export default Marvel;
