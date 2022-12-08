import React from 'react';
import './style.css';

import TopoPrincipal from '../TopoPrincipal';
import Rodape from '../rodape';

export default function Conteudo(){
    return(
        <main className='main'>
            <TopoPrincipal/>
            <section className='secao1'>
                <div className='caixa1'>
                    <h2 className='titulo1'>
                        Olá! Eu sou o <span>Nailson Rocha</span>! 
                    </h2>
                    <h2 className='titulo1'>Esse é o meu portifólio</h2>
                </div>
            </section>
            
            <section  className='secao2'>
                <div className='caixa2'>
                    <p className='apresentacao'>
                        "Ser desenvolvedor é uma viagem onde a próxima parada é a solução de um problema"
                    </p>
                    <p className='autor'>
                        - Thales Valentim
                    </p>
                </div>
            </section>

            <div className='box-titulo2'>
                <h2 className='titulo2'>Minhas <span>Habil</span>idades</h2>
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

            <section className='secao3'>
                <div className='caixa-curtiu'>
                    <p className='hehe'>
                        Hehe! Curtindo? vem comigo bebê 😀
                    </p>
                </div>
            </section>

            <Rodape/>
        </main>
    );
}