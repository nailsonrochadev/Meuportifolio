import React from 'react';
import './style.css';



export default function TopoPrincipal (){
    return(
        <header className='topo-principal'>
            <h2 id='inicio'>ᑎᗩᖇO</h2>
            <nav className='nav-topo-principal'>
                <a className='link-topo-principal qmsou' href='#quem-sou'>QUEM SOU</a>
                <a className='link-topo-principal' href='#repositorios' >REPOSITÓRIOS</a>
                <a className='link-topo-principal linkedin' href='https://www.linkedin.com/in/nailson-rocha-a2b993246/' target='blank'>LINKEDIN</a>
                <a className='link-topo-principal' href='#contatos'>CONTATO</a>
            </nav>
        </header>
    );
}