import React from 'react';
import { motion } from 'framer-motion';
import './style.css';

import TopoPrincipal from '../TopoPrincipal'
import { Slide } from '../slide/slide';
import Rodape from '../rodape';

export default function Conteudo(){

    return(
        <main className='conteudo'>
            <TopoPrincipal/>
            <section className='boasvindas'>
                <div className='box-boasvindas'>
                    <motion.h1  animate={{x: -200}} className='titulo-boasvindas'>
                        Sejam bem-vindos!
                    </motion.h1>
                    <p className='paragrafo-boasvindas'>Naveguem e conheçam um pouco mais sobre mim, saibam quais as minhas expectativas no universo tecnológico e minhas principais habilidades no desenvolvimento Front-end.</p>
                </div>
            </section>
      

            <section className='cards-habilidades'>
                <div className='habilidades'>

                    <div className='box-frontend'>
                        <img className='icones' src='../assets/ui.png' alt='Front-end'/>
                        <a className='link-id' href='#front-end'><h3 className='titulo-habilidade-frontend'>FRONT-END</h3></a>
                            
                        <p className='paragrafo-habilidade-frontend'>HTML, CSS, JavaScript, React JS e Angular...</p>
                    </div>

                    <div className='box-ferramentas'>
                        <img className='icones' src='../assets/ferramentas.png' alt='Ferramentas'/>
                        <a className='link-id' href='#front-end'><h3 className='titulo-habilidade-ferramenta'>FERRAMENTAS</h3></a>
                        <p className='paragrafo-habilidade-ferramenta'>Git, GitHub e Scrum...</p>
                    </div>

                    <div className='box-formacao'>
                        <img className='icones' src='../assets/graduacao.png' alt='Formação'/>
                        <a className='link-id' href='#formacao'><h3 className='titulo-habilidade-formacao'>FORMAÇÃO</h3></a>
                        
                        <p className='paragrafo-habilidade-formacao'>Ensino médio - Colégio Central da Bahia, Engenharia de Software - UniFatecie...</p>
                    </div>

                    <div className='box-cursos'>
                        <img className='icones' src='../assets/diploma.png' alt='Cursos'/>
                        <a className='link-id' href='#curso'><h3 className='titulo-habilidade-curso'>CURSOS</h3></a>
                        <p className='paragrafo-habilidade-curso'>Publicidade, Propaganda, Empreendedorismo, Liderança, Gestão empresarial, Marketing e Técnicas de venda...</p>
                    </div>

                    <div className='box-experiencia'>
                        <img className='icones' src='../assets/pasta.png' alt='Experiência'/>
                        <a className='link-id' href='#experiencia'><h3 className='titulo-habilidade-experiencia'>EXPERIÊNCIA</h3></a>
                        <p className='paragrafo-habilidade-experiencia'>Atendente, Recepcionista, Barbeiro, Militar, Segurança e Repositor...</p>
                    </div>

                </div>

                <div className='box-icone'>
                    <img className='vetor' src='assets/vetor.png' alt='Vetor'/>
                </div>

            </section>
            <section className='secao-slide'>
                <Slide/>
            </section>
                
            <Rodape/>
           
        </main>
    );
}