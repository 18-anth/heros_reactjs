import React from 'react';
import './Marvel.css';

const Marvel = () => {
    return (
           <>
            <h1>Heros de Marvel</h1>
            <div className="contenedor_Marvel">
              <div className="images_captain">
                <a className="todo" href="/captain">
                  Show More
                </a>
              </div>
              <div className="images_cyclops">
              <a className="todo" href="/cyclops">
                  Show More
                </a>
              </div>
              <div className="images_daredevil">
              <a className="todo" href="/daredevil">
                  Show More
                </a>
              </div>
              <div className="images_hawkeye">
                <a className="todo" href="/hawkeye">
                    Show More
                  </a>
              </div>
              <div className="images_hulk">
              <a className="todo" href="/hulk">
                  Show More
                </a>
              </div>
              <div className="images_iron">
              <a className="todo" href="/iron">
                  Show More
                </a>
              </div>
              <div className="images_silver">
              <a className="todo" href="/silver">
                  Show More
                </a>
              </div>
              <div className="images_spider">
              <a className="todo" href="/spider">
                  Show More
                </a>
              </div>
              <div className="images_thor">
              <a className="todo" href="/thor">
                  Show More
                </a>
              </div>
              <div className="images_wolverine">
              <a className="todo" href="/wolverine">
                  Show More
                </a>
              </div>
            </div>
           </>
    );
}

export default Marvel;