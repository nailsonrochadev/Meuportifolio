import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export function TopoSecundario (){
return(
        <header className='header'>
            <nav className='links'>
                <Link className='naro' to='/'>ᑎᗩᖇO</Link>
            </nav>
        </header>
    );
}