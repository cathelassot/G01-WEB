import React, { Children } from 'react';
import "./form.css";

function alerta(mensaje){
    alert (mensaje)
}

export default function Button(props){

    const {children, onClick, type} = props

    return (<button className='button' type= {type} onClick=
    {onClick}>{children}</button>)
}