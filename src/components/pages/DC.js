import React, { Component } from 'react';
import './DC.css';

class DC extends Component {

  render() {
    return (
      <>
        <h1>Heros de DC</h1>
        <div className="contenedor_DC">
          <a className="todo_dc" href="/arrow">
            <div className="images_arrow" name="arrow">

            </div>
          </a>
          <a className="todo_dc" href="/batman">
            <div className="images_batman">

            </div>
          </a>
          <a className="todo_dc" href="/canary">
            <div className="images_black">

            </div>
          </a>
          <a className="todo_dc" href="/blue">
            <div className="images_blue">

            </div>
          </a>
          <a className="todo_dc" href="/flash">
            <div className="images_flash">

            </div>
          </a>
          <a className="todo_dc" href="/linter">
            <div className="images_green">

            </div>
          </a>
          <a className="todo_dc" href="/martian">
            <div className="images_martian">

            </div>
          </a>
          <a className="todo_dc" href="/robin">
            <div className="images_robin">

            </div>
          </a>
          <a className="todo_dc" href="/superman">
            <div className="images_superman">

            </div>
          </a>
          <a className="todo_dc" href="/wonder">
            <div className="images_wonder">

            </div>
          </a>

        </div>
      </>
    );
  }
}
export default DC;