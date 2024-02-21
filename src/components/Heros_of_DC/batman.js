import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import '../css/HEROES.css';

export default function batman() {
    return (
        <>
            <div className="heros_container">

                <div className="images_batman">

                </div>
                <div>
                    <h3>
                        I'm Batman!
                    </h3>

                    <p>
                        Batman (conocido inicialmente como Bat-Man y en español como el Hombre Murciélago) es un personaje creado por los estadounidenses Bob Kane y Bill Finger,13​ y propiedad de DC Comics. Apareció por primera vez en la historia titulada «El caso del sindicato químico» de la revista Detective Comics N.º 27, lanzada por la editorial National Publications el 30 de marzo de 1939. La identidad secreta de Batman es Bruce Wayne (Bruno Díaz en algunos países de habla hispana),​ un multimillonario magnate empresarial y filántropo dueño de Empresas Wayne en Gotham City. Después de presenciar el asesinato de sus padres, el Dr.
                    </p>
                </div>
                <div>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/NLOp_6uPccQ?start=6"
                        title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen></iframe>
                </div>
            </div>
        </>
    )
}
