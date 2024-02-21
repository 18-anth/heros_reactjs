import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Grid from "@mui/material/Grid";

import "./Marvel.css";
import { Link } from "react-router-dom";

function Marvel() {
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
  return (
    <>
      <div
        className="Home_active "
        style={{
          justifyContent: "center",
          alignContent: "center",
          textAlign: "center",
          alignItems: "center",
        }}
      >
        <br />
        <Grid
          container
          spacing={2}
          justifyContent="center"
          alignItems="center"
          alignContent="center"
        >
          {heroesData_Marvel.map((heroesData_Marvel, index) => (
            <Grid
              item
              key={index}
              xs={6}
              md={6}
              lg={3}
              justifyContent="center"
              alignItems="center"
              alignContent="center"
              padding="20px"
            >
              <Card key={index} sx={{ maxWidth: 340, maxHeight: 530 }}>
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
                      height="150"
                      className={`${heroesData_Marvel.className}`}
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
