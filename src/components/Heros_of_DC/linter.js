import React from 'react';
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import '../css/HEROES.css';

export default function linter() {
    return (
        <>
            <div className="heros_container">

                <div className="images_green">

                </div>
                <div>
                    <h3>
                        Hello, My Name is green Later
                    </h3>

                    <p>
                        Linterna Verde (en inglés: Green Lantern) es el alias de varios superhéroes de la ficción del Universo DC, los cuales se caracterizan por un anillo de poder y la capacidad de crear manifestaciones de luz sólida con los susodichos anillos. El primer Linterna Verde (Alan Scott) hizo su debut en julio de 1940 en el All-American Comics #16 (portada de Sheldon Moldoff) durante la Edad de Oro del Cómic estadounidense.1​ Su creación se la debemos al guionista Bill Finger y al dibujante Martín Nodell.
                    </p>
                </div>
                <div>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/7-GO9fo9DtM?start=6"
                        title="YouTube video player"
                        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen></iframe>
                </div>
            </div>
        </>
    )
}
