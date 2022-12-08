import React from 'react';
import './style.css';

import { TopoSecundario } from '../../componentes/TopoSecundário'
import { Propriedades } from '../../componentes/props/props';

import telefone from '../../icones/telefone.png'
import email from '../../icones/email.png'
import twitter from '../../icones/twitter.png'
import instagram from '../../icones/instagram.png'
import whatsapp from '../../icones/whatsapp.png'
import facebook from '../../icones/facebook.png'

export default function Contatos (){

    
    return(

    <div className="boxprops">
    <TopoSecundario/>

    <Propriedades className = 'box tel'         imagem = {telefone}     nome = {<a className='link-contato' href='https://criarmeulink.com.br/u/1670125792' target='blank'>Telefone</a>}/>
    <Propriedades className = 'box email'       imagem = {email}        nome = {<a className='link-contato' href='https://criarmeulink.com.br/u/1670125716' target='blank'>Email</a>}/>
    <Propriedades className = 'box twitter'     imagem = {twitter}      nome = {<a className='link-contato' href='https://twitter.com/NailsonRocha_'         target='blank'>Twitter</a>}/>
    <Propriedades className = 'box instagram'   imagem = {instagram}    nome = {<a className='link-contato' href                                            target='blank'>Em construção</a>}/>
    <Propriedades className = 'box whatsapp'    imagem = {whatsapp}     nome = {<a className='link-contato' href='https://criarmeulink.com.br/u/1670467795' target='blank'>whatsapp</a>}/>
    <Propriedades className = 'box facebook'    imagem = {facebook}     nome = {<a className='link-contato' href                                            target='blank'>Em construção</a>}/>
    </div>

    );
}

