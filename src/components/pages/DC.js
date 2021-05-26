import React from 'react';
import { Component } from 'react';
import './DC.css';

class DC extends Component {
  state={
    Search:"",
  }
  render(){ 
    return (
        <>
         
            <input
            type="text"
            placeholder="Search"
            className="textField"
            />
            <i class="fas fa-search"></i> 
            <div className="contenedor_DC">

                <div className="images_arrow" name="arrow">
                <a className="todo_dc" href="/arrow">
                  Show More
                </a>
                </div>
                <div className="images_batman">
                <a className="todo_dc" href="/batman">
                  Show More
                </a>
                </div>
                <div className="images_black">
                <a className="todo_dc" href="/canary">
                  Show More
                </a>
                </div>
                <div className="images_blue">
                <a className="todo_dc" href="/blue">
                  Show More
                </a>
                </div>
                <div className="images_flash">
                <a className="todo_dc" href="/flash">
                  Show More
                </a>                    
                </div>
                <div className="images_green">
                <a className="todo_dc" href="/linter">
                  Show More
                </a>
                </div>
                <div className="images_martian">
                <a className="todo_dc" href="/martian">
                  Show More
                </a>
                </div>
                <div className="images_robin">
                <a className="todo_dc" href="/robin">
                  Show More
                </a>                    
                </div>
                <div className="images_superman">
                <a className="todo_dc" href="/superman">
                  Show More
                </a>
                </div>
                <div className="images_wonder">
                <a className="todo_dc" href="/wonder">
                  Show More
                </a>                    
                </div>
            </div>
        </>
    );
}
}
export default DC;