import React from 'react';
import '../css/HEROES.css';

export default function flash() {
    return (
        <>
            <div className="heros_container">

                <div className="images_flash">

                </div>
                <div>
                    <h3>
                        My Name is Barry Allen, but so I'm flash!
                    </h3>
                    <br />
                    <p>
                        Flash (conocido también como The Flash) es el nombre de varios superhéroes ficticios que aparecen en los cómics estadounidenses publicados por DC Comics. Creado por el escritor Gardner Fox y el artista Harry Lampert, el "Flash" original apareció por primera vez en Flash Comics #1 (fecha de portada de enero de 1940 / mes de noviembre de 1939).1​ Apodado el "Corredor Escarlata", todas las encarnaciones del Flash poseen "súper velocidad", que incluye la capacidad de correr, moverse y pensar extremadamente rápido, también puede atravesar la materia sólida
                    </p>
                </div>
                <div>
                    <iframe width="560" height="250"
                     src="https://www.youtube.com/embed/eFayQNkP2WA?start=6" 
                    title="YouTube video player" frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen></iframe>
                </div>
            </div>
        </>
    )
}
