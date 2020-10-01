import React from 'react';
import '../header/Header.css';

const Header = (props) => {
    return (
        <div className="card-header">
            <h1 className="card-header-title">
                Tenés {props.numTodos} Tareas
            </h1>
        </div>
    )
}

export default Header;