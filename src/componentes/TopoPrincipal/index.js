import React from 'react';
import './style.css';



export default function TopoPrincipal (){
    return(
        <header className='header' id='inicio'>
            <div>
                <span>=</span>
                <span>n</span>
                <span>a</span>
                <span>r</span>
                <span>o</span>
            </div>
            <nav className='navegacao'>
                <a href='#quem-sou'>QUEM SOU</a>
                <a href='#repositorios' >REPOSITÓRIOS</a>
                <a href='https://www.linkedin.com/in/nailson-rocha-a2b993246/' target='blank'>LINKEDIN</a>
                <a href='#contatos'>CONTATO</a>
            </nav>
        </header>
    );
}