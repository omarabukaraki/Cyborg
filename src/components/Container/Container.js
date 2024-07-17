import React from "react";
import './Container.css';

function Container(props){
    return(<>
    <p>{props.children}</p>
    </>);
}

export default Container;