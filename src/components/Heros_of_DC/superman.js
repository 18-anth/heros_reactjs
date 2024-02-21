import React from 'react';
import '../css/HEROES.css';

export default function superman() {
    return (
        <>
            <div className="heros_container">
               
                <div className="images_superman">

                </div>
                <div>
                    <h3>
                        Hello, I'm Superman
                    </h3>
                
                    <p>
                        Superman es un superhéroe ficticio, que apareció por primera vez en los cómics estadounidenses publicados por DC Comics.1​2​3​4​El personaje fue creado por el escritor estadounidense Jerry Siegel y el artista canadiense Joe Shuster en 1933 cuando ambos se encontraban viviendo en Cleveland, Ohio. Sus creadores lo vendieron a Detective Comics, Inc. en 1938 por 130 dólares 5​ y la primera aventura del personaje fue publicada en Action Comics #1 (junio de 1938), para luego aparecer en varios seriales de radio, programas de televisión, películas, tiras periódicas y videojuegos.
                    </p>
                </div>
                <div>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/9vMqoZ9T_0M?start=6" 
                title="YouTube video player" frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen></iframe>
                </div>
            </div>
        </>
    )
}
