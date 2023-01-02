import React from 'react';
import './style.css';

import TopoPrincipal from '../TopoPrincipal';
import Rodape from '../rodape';

export default function Conteudo(){
    return(
        <main className='main'>
            <TopoPrincipal/>
            <section className='secao-conteudo-1'>
                <div className='caixa-conteudo-1'>
                    <h2 className='titulo-conteudo-1'>
                        Sejam bem-vindos ao meu portifólio!
                    </h2>
                    <p className='paragrafo-conteudo-1'>Naveguem e conheçam um pouco mais sobre mim, saibam quais as minhas expectativas no universo tecnológico e minhas principais habilidades no desenvolvimento Front-end.</p>
                </div>
            </section>
            
            <section  className='secao-conteudo-2'>
                <div className='caixa-conteudo-2'>
                    <p className='citacao'>
                        "Ser desenvolvedor é uma viagem onde a próxima parada é a solução de um problema"
                    </p>
                    <p className='autor'>
                        - Thales Valentim
                    </p>
                </div>
            </section>

            <div className='secao-conteudo-3'>
                <h2 className='titulo-conteudo-3'>Minhas <span className='span'>Habil</span>idades</h2>
            </div>

            <section className='cards'>
  
                <div className='dev html'>
                    <a href='https://www.devmedia.com.br/certificado/tecnologia/html/nailson-rocha' target='blank'><img className='icones' src='../assets/html.png' alt='HTML'/></a>

                    <p className='paragrafo-card'>Clique no link acima e veja quais são as minhas habilidades em HTML</p>
                </div>

                <div className='dev css'>
                    <a href='https://www.devmedia.com.br/certificado/tecnologia/css/nailson-rocha' target='blank'><img className='icones' src='../assets/css.png' alt='CSS'/></a>

                    <p className='paragrafo-card'>Clique no link acima e veja quais são as minhas habilidades em CSS</p>
                </div>

                <div className='dev js'>
                    <a href='https://www.devmedia.com.br/certificado/tecnologia/javascript/nailson-rocha' target='blank'><img className='icones' src='../assets/javascript.png' alt='JAVASCRIPT'/></a>

                    <p className='paragrafo-card'>Clique no link acima e veja quais são as minhas habilidades em JavaScript</p>
                </div>

                <div className='dev react'>
                    <a href='https://www.devmedia.com.br/certificado/tecnologia/react/nailson-rocha' target='blank'><img className='icones' src='../assets/physics.png' alt='REACT'/></a>

                    <p className='paragrafo-card'>Clique no link acima e veja quais são as minhas habilidades em React</p>
                </div>

                <div className='dev angular'>
                    <a href='https://www.devmedia.com.br/certificado/tecnologia/angular/nailson-rocha' target='blank'><img className='icones' src='../assets/angular.png' alt='ANGULAR'/></a>

                    <p className='paragrafo-card'>Clique no link acima e veja quais são as minhas habilidades em Angular</p>
                </div>

                <div className='dev portugol'>
                    <a href='https://www.devmedia.com.br/certificado/tecnologia/programacao/nailson-rocha' target='blank'><img className='icones' src='../assets/portugol.png' alt='PORTUGOL'/></a>

                    <p className='paragrafo-card'>Clique no link acima e veja quais são as minhas habilidades em Portugol</p>
                </div>

                <div className='dev git'>
                    <a href target='blank'><img className='icones' src='../assets/git.png' alt=''/></a>

                    <p className='paragrafo-card'>Clique no link acima e veja quais são as minhas habilidades em Git e GitHub</p>
                </div>

            </section>

            <section className='secao-conteudo-4'>
                <div className='caixa-conteudo-4'>
                    <p className='paragrafo-conteudo-4'>
                        Acima tem alguns dos cursos práticos Front-end na linguagem JavaScript. Minha principal habilidade é com a biblioteca React.
                        Com o React consigo desenvolver sites responsivos, trabalhar com componentes, props, SPAs etc. Apessar da falta de experiência de mercado,
                        tento entregar um código limpo e de fácil entendimento. Mas, sei que tenho muito a aprender com esse universo tecnológico.
                        Sinto-me muito realizado com essa nova experiência e pretendo investir muito para adquirir mais conhecimento na área.
                    </p>
                </div>
            </section>

            <section className='secao-conteudo-5'>
                <div className='caixa-conteudo-5'>
                    <p className='paragrafo-conteudo-5'>
                        Em construção...
                    </p>
                </div>
            </section>

            <Rodape/>
        </main>
    );
}