import React from "react";
import "./HeroSection.css";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

import DC from "./img/DC.png";
import img_MARVEL from "./img/MARVEL.png";

function HeroSection() {
  return (
    <>
      <div
        style={{
          padding: "10px",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid container spacing={1} justifyContent="center" alignItems="center">
          <Grid
            item
            xs={12}
            md={2}
            lg={3}
            display="flex"
            justifyContent="center"
          >
            <Link to="/dc">
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
                      }}
                    >
                      DC Comic
                    </Typography>
                  </CardContent>

                  <CardMedia
                    component="img"
                    image={DC}
                    alt="DC"
                    sx={{
                      Width: "100%",
                      maxHeight: 530,
                      objectFit: "contain",
                    }}
                  />
                </CardActionArea>
              </Card>
            </Link>
          </Grid>
          <Grid
            item
            xs={12}
            md={2}
            lg={3}
            display="flex"
            justifyContent="center"
          >
            <Link to="/marvel" style={{ textDecoration: "none" }}>
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
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      style={{
                        justifyContent: "center",
                        alignContent: "center",
                        textAlign: "center",
                        alignItems: "center",
                      }}
                    >
                      Marvel Comic
                    </Typography>
                  </CardContent>

                  <CardMedia
                    component="img"
                    alt="MARVEL"
                    image={img_MARVEL}
                    sx={{
                      Width: "50vw",
                      maxHeight: 530,
                      objectFit: "contain",
                    }}
                  />
                </CardActionArea>
              </Card>
            </Link>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default HeroSection;
