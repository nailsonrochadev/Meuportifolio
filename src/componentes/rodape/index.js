import React from 'react';
import './style.css';

import { Propriedades } from '../props/props';

export default function Rodape(){
    return(
        <div className='roda'>
            <footer className='footer'>
                <div className='acopla'>
                    <div className='footer-caixa-links'>
                        <h2>Menu</h2>
                        <div className="links-rodape">
                            <a className='a-footer' href='#quem-sou'>Quem sou</a>
                            <a className='a-footer' href='#repositorios' >Repositórios</a>
                            <a className='a-footer' href='https://www.linkedin.com/in/nailson-rocha-a2b993246/' target='blank'>Linkedin</a>
                            <Propriedades nome = {<a className='a-footer' href='https://twitter.com/NailsonRocha_'         target='blank'>Twitter</a>}/>
                            <a className='a-footer' href  target='blank'>Telegram</a>
                            <Propriedades nome = {<a className='a-footer' href='https://criarmeulink.com.br/u/1670125792' target='blank'>Telefone</a>}/>
                            <Propriedades nome = {<a className='a-footer' href='https://criarmeulink.com.br/u/1670125716' target='blank'>Email</a>}/>
                            <Propriedades nome = {<a className='a-footer' href='https://criarmeulink.com.br/u/1670467795' target='blank'>whatsapp</a>}/>
                            <a className='inicio' href='#inicio'>Inicio</a>
                        </div>
                    </div>
                </div>
                <div className='rodape-logo'>
                   
                </div>
            </footer>
            <p>©2022</p>
        </div>
       
    );
}