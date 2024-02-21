import React from "react";
import "../App.css";
import "./HeroSection.css";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material"; 

function HeroSection() {
  return (
    <>
      <br />
      <div
        className="hero-container"
        style={{
          justifyContent: "center",
          alignContent: "center",
          textAlign: "center",
          alignItems: "center",
          height: "150vh",
        }}
      >
        <Grid
          container
          spacing={2}
          justifyContent="center"
          alignItems="center"
          alignContent="center"
          padding="20px"
        >
          <Grid
            item
            xs={12}
            md={6}
            lg={3}
            justifyContent="center"
            alignItems="center"
            alignContent="center"
            padding="20px"
          >
            <Card
              sx={{
                maxWidth: 945,
                maxHeight: 830,
              }}
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
                    DC Comic
                  </Typography>
                </CardContent>
                <CardContent>
                  <div style={{ margin: "0 5px" }}>
                    <Link to="/dc"  >
                      <CardMedia
                        height="150"
                        className="image_dc"
                        style={{ width: "100%" }}
                      />
                    </Link>
                  </div>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            lg={3}
            justifyContent="center"
            alignItems="center"
            alignContent="center"
            padding="20px"
          >
            <Card
              sx={{
                maxWidth: 945,
                maxHeight: 830,
              }}
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
                    Marvel Comic
                  </Typography>
                </CardContent>
                <CardContent>
                  <div style={{ margin: "0 5px" }}>
                    <Link to="/marvel"  >
                      <CardMedia
                        height="150"
                        className="image_marvel"
                        style={{ width: "100%" }}
                      />
                    </Link>
                  </div>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </div>
   
    </>
  );
}

export default HeroSection;
