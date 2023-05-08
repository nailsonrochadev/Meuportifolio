import React from 'react';
import './tecnologia.css';

export function Tecnologias (){

    return (
        <div id='front-end' className='tech'>

            <article>
                <h2 className='titulo-tech'>repositóriosETecnologias</h2>
            </article>

            <div className='card-tech'>
                <div id='repositorios'>
                    <h3>Projetos</h3>
                    <nav>
                        <a  href='https://github.com/NailsonRocha/Agencia-de-viagens'>Agência de viagens</a>
                        <a  href='https://github.com/NailsonRocha/signos'>Signo</a>
                        <a  href='https://github.com/NailsonRocha/Otica'>Ótica</a>
                        <a  href='https://github.com/NailsonRocha/clinica'>Clínica</a>
                        <a  href='https://github.com/NailsonRocha/Pousada'>Pousada</a>
                        <a  href='https://github.com/NailsonRocha/Projeto-advocacia'>Advocacia</a>
                        <a  href='/'>GitHub</a>
                    </nav>
                </div>


                <div>
                    <h3>Tecnologias</h3>
                        <nav>
                            <a href='https://www.devmedia.com.br/certificado/tecnologia/algoritmo/nailson-rocha' target='blank'>Algoritimo</a>
                            <a href='https://www.devmedia.com.br/certificado/tecnologia/html/nailson-rocha' target='blank'>HTML</a>
                            <a href='https://www.devmedia.com.br/certificado/tecnologia/css/nailson-rocha' target='blank'>CSS</a>
                            <a href='https://www.devmedia.com.br/certificado/tecnologia/javascript/nailson-rocha' target='blank'>JavaScript</a>
                            <a href='https://www.devmedia.com.br/certificado/tecnologia/react/nailson-rocha' target='blank'>React</a>
                            <a href='https://www.devmedia.com.br/certificado/tecnologia/angular/nailson-rocha' target='blank'>Angular</a>
                            <a href='/' target='blank'>Git e GitHub</a>
                            <a href='https://www.devmedia.com.br/certificado/tecnologia/programacao/nailson-rocha' target='blank'>Programação</a>
                        </nav>
                </div>      
            </div>
        </div>
    )
}