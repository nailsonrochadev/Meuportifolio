import React from 'react';
import './style.css';

import TopoPrincipal from '../TopoPrincipal'
import { Tecnologias } from '../tecnologias/tecnologias';
import Rodape from '../rodape';

export default function Conteudo(){

    return(
        <main className='main'>
            <TopoPrincipal/>
            <section className='section1'>
                <div className='div1'>
                    <p className='p'>
                        Nailson Rocha 
                    </p>
                    <h1 className='titulo1'>
                        Desenvolvedor Front-end
                    </h1>
                    <p className='paragrafo1'>Naveguem e conheçam um pouco mais sobre mim, saibam quais as minhas expectativas no universo tecnológico e minhas principais habilidades no desenvolvimento Front-end.</p>
                </div>
            </section>
      

            <section className='section2'>
                <div className='div2'>

                    <div>
                        <img src='../assets/ui.png' alt='Front-end'/>
                        <a href='#front-end'><h3 className='titulo-habilidade-frontend'>FRONT-END</h3></a>
                        <p className='paragrafo2'>HTML, CSS, JavaScript, React JS e Angular...</p>
                    </div>

                    <div>
                        <img src='../assets/ferramentas.png' alt='Ferramentas'/>
                        <a href='#front-end'><h3 className='titulo-habilidade-ferramenta'>FERRAMENTAS</h3></a>
                        <p className='paragrafo2'>Git, GitHub e Scrum...</p>
                    </div>

                    <div>
                        <img src='../assets/graduacao.png' alt='Formação'/>
                        <a href><h3 className='titulo-habilidade-formacao'>FORMAÇÃO</h3></a>
                        
                        <p className='paragrafo2'>Ensino Médio Completo - Colégio Central da Bahia</p>
                    </div>

                    <div>
                        <img src='../assets/diploma.png' alt='Cursos'/>
                        <a href><h3 className='titulo-habilidade-curso'>CURSOS</h3></a>
                        <p className='paragrafo2'>Publicidade, Propaganda, Empreendedorismo, Liderança e Marketing...</p>
                    </div>

                    <div>
                        <img src='../assets/pasta.png' alt='Experiência'/>
                        <a href><h3 className='titulo-habilidade-experiencia'>EXPERIÊNCIAS</h3></a>
                        <p className='paragrafo2'>Atendente, Recepcionista, Barbeiro, Militar, Segurança e Repositor...</p>
                    </div>
                </div>
            </section>
            <section className='section3'>
                <Tecnologias/>
            </section>
            <Rodape/>
           
        </main>
    );
}