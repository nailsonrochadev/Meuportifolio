import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export function TopoSecundario (){
return(
        <header className='geral-topo-secundario'>
            <nav className='caixa-topo-secudario'>
                <Link className='link-topo-secundario' to='/'>ᑎᗩᖇO</Link>
            </nav>
        </header>
    );
}