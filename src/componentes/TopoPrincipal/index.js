import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';



export default function TopoPrincipal (){
    return(
        <header className='header'>
            <nav className='links'>
                <Link className='naro' to='/'>ᑎᗩᖇO</Link>
                <Link className='link' to='/quemsou'>QUEM SOU</Link>
                <a className='link' href='https://github.com/NailsonRocha' target='blank'>REPOSITÓRIOS</a>
                <a className='link' href='https://www.linkedin.com/in/nailson-rocha-a2b993246/' target='blank'>LINKEDIN</a>
                <a className='link' href>FERRAMENTAS</a>
                <Link className='link' to='/contatos'>CONTATO</Link>
            </nav>
        </header>
    );
}