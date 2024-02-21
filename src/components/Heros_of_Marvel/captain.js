import React from 'react';
import '../pages/Marvel.css';

function captain() {
    return (
       <>
            <div className="heros_container">
                <div className="images_captain">

                </div>
                <div>
                    <h3>
                        My Name is Captain America!
                    </h3>
              
                    <p>
                    El Capitán América, 
                    cuyo nombre real es Steven "Steve" Grant Rogers, 
                    es un superhéroe ficticio que aparece en los cómics estadounidenses publicados por Marvel Comics. 
                    Creado por los historietistas Joe Simon y Jack Kirby, el personaje apareció por primera vez en Captain America Comics #1 (marzo de 1941) de Timely Comics, 
                    predecesor de Marvel Comics. 
                    Desde que Marvel Comics revivió al personaje en 1964, el Capitán América se ha mantenido en publicación.
                    </p>
                </div>
                <div>
                <iframe width="560" height="315" 
                src="https://www.youtube.com/embed/7SlILk2WMTI?start=6" 
                title="YouTube video player" frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen></iframe>
                </div>
            </div>
       </>
    )
}

export default captain;
