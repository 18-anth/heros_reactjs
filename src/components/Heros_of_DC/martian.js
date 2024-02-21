import React from 'react';
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import '../css/HEROES.css';

export default function martian() {
    return (
        <>
            <div className="heros_container">
              
                <div className="images_martian">

                </div>
                <div>
                    <h3>
                    My Name is martian green!
                    </h3>
                
                    <p>
                    Aparecieron por primera vez juntos como la Liga de la Justicia de América (JLA) en The Brave and the Bold # 28 (marzo de 1960). En el reinicio de The New 52, Cyborg reemplazó al Detective Marciano como uno de los siete miembros fundadores. El control completo de su estructura molecular también le permite a Ma'alefa'ak cambiar de forma, regenerarse y utilizar la invisibilidad e intangibilidad. Ma'alefa'ak también posee telequinesis, y originalmente poseía telepatía, aunque esta habilidad fue eliminada por el Consejo de Marte.
                    </p>
                </div>
                <div>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/u6Yf3A3Awy4?start=6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
        </>
    )
}
