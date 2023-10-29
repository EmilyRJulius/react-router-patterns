import React from "react";
import { Link } from "react-router-dom";

function ColorList(){
    const colorLinks = Object.keys(colors).map(colorName => (
        <li key={colorName}>
          <Link to={`/colors/${colorName}`}>{colorName}</Link>
        </li>
      ));

    return(
        <div>
            <header>
                <h1>Welcome to the color factory</h1>
                <h1>
                    <Link to="/colors/new">Add a color</Link>
                </h1>
            </header>
            <div>
                <p>Please select a color.</p>
                <ul>{colorLinks}</ul>
            </div>
        </div>
    );
}

export default ColorList;