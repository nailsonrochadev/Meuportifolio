import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

import { Propriedades } from '../props/props';

export default function Rodape(){
    return(
        <div className='roda'>
            <footer className='footer'>
                <div className='footer-caixa-links'>
                    <h2>Mais naro</h2>
                    <div className="links-rodape">
                        <Link className='link-footer' to='/quemsou'>Quem sou</Link>
                        <Link className='link-footer' to='/repositorios' >Repositórios</Link>
                        <a className='link-footer' href='https://www.linkedin.com/in/nailson-rocha-a2b993246/' target='blank'>Linkedin</a>
                        <Link className='link-footer' to='/contatos'>Contato</Link>
                    </div>
                </div>

                <div className='footer-caixa-links meio'>
                    <h2>Redes sociais</h2>
                    <div className="links-rodape">
                        <Propriedades nome = {<a className='a-footer' href                                            target='blank'>Facebook</a>}/>
                        <Propriedades nome = {<a className='a-footer' href                                            target='blank'>Instagram</a>}/>
                        <Propriedades nome = {<a className='a-footer' href='https://twitter.com/NailsonRocha_'         target='blank'>Twitter</a>}/>
                        <a className='a-footer' href  target='blank'>Telegram</a>
                    </div>
                </div>

                <div className='footer-caixa-links'>
                    <h2 id='contatos'>Contato</h2>
                    <div className="links-rodape">
                        <Propriedades nome = {<a className='a-footer' href='https://criarmeulink.com.br/u/1670125792' target='blank'>Telefone</a>}/>
                        <Propriedades nome = {<a className='a-footer' href='https://criarmeulink.com.br/u/1670125716' target='blank'>Email</a>}/>
                        <Propriedades nome = {<a className='a-footer' href='https://criarmeulink.com.br/u/1670467795' target='blank'>whatsapp</a>}/>
                    </div>
                </div>
            </footer>
            <p>©2022</p>
        </div>
       
    );
}