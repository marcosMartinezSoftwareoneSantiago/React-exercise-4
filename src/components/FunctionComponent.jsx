import React from "react";

const retorna = (param) => param;

export const FunctionComponent = () =>{

    return(
        <header  className="justify-content-center navbar fixed-top bg-dark">
            <h1 className="text-light">{retorna("Text of the header had being interpoled")}</h1>
        </header>
    );
};