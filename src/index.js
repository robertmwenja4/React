import React from "react";
import reactDom from "react-dom";

const element = <h1>Hello World</h1>
function ClickMe() {
    return {
        names: 'Robert',
        address: 'Makadara'
    }
}
const naming = <h2>{ClickMe().names}</h2>
reactDom.render(element, document.getElementById("root"));
reactDom.render(naming, document.getElementById("btn"));