import React from 'react'
import './style.css'


export function Slide (){

    return (
        <div className='pagina-slide'>

            <h2><span>Tec</span>nologia e informações adicionais</h2>

            <section className='slider'>
                <div className='agencia agencia-1' id='quem-sou'>
                    <img src='assets/foto5.jpg' alt='Minha foto'/>
                    <p>Nordestino, 29 anos, pai e esposo. Estou muito feliz 
                        com todo o esforço e dedicação. Sei que o caminho é árduo, 
                        mas me considero pronto para dar continuidade à essa jornada tecnológica.
                    </p>
                </div>

                <div className='agencia agencia-2'>
                    <img src='assets/foto4.jpg' alt='Minha foto'/>
                    <p>Busco minha primeira oportunidade como desenvolvedor Front-End 
                        para colocar em prática minhas habilidades adquiridas ao longo
                        do curso realizado na DevMedia.
                    </p>
                </div>
            </section>

            
            <div className='slide-link'>

                <div className='slidi' id='repositorios'>
                    <h3 className='h3'>Meus projetos</h3>
                    <ul className='ul'>
                        <li><a className='a' href='https://github.com/NailsonRocha/Agencia-de-viagens'>Agência de viagens</a></li>
                        <li><a className='a' href='https://github.com/NailsonRocha/signos'>Signo</a></li>
                        <li><a className='a' href='https://github.com/NailsonRocha/Otica'>Ótica</a></li>
                        <li><a className='a' href='https://github.com/NailsonRocha/clinica'>Clínica</a></li>
                        <li><a className='a' href='https://github.com/NailsonRocha/Pousada'>Pousada</a></li>
                        <li><a className='a' href='https://github.com/NailsonRocha/Projeto-advocacia'>Advocacia</a></li>
                        <li><a className='a' href='https://github.com/NailsonRocha/Sorveteria'>Sorveteria</a></li>
                        <li><a className='a' href='https://github.com/NailsonRocha/Livro'>Livraria</a></li>
                    </ul>
                </div>
                
                
                <div className='slidi' id='front-end'>
                    <h3 className='h3'>Certificações</h3>
                    <ul className='ul'>
                        <li><a className='a' href='https://www.devmedia.com.br/certificado/tecnologia/algoritmo/nailson-rocha' target='blank'>Algoritimo</a></li>
                        <li><a className='a' href='https://www.devmedia.com.br/certificado/tecnologia/html/nailson-rocha' target='blank'>HTML</a></li>
                        <li><a className='a' href='https://www.devmedia.com.br/certificado/tecnologia/css/nailson-rocha' target='blank'>CSS</a></li>
                        <li><a className='a' href='https://www.devmedia.com.br/certificado/tecnologia/javascript/nailson-rocha' target='blank'>JavaScript</a></li>
                        <li><a className='a' href='https://www.devmedia.com.br/certificado/tecnologia/react/nailson-rocha' target='blank'>React</a></li>
                        <li><a className='a' href='https://www.devmedia.com.br/certificado/tecnologia/angular/nailson-rocha' target='blank'>Angular</a></li>
                        <li><a className='a' href target='blank'>Git e GitHub</a></li>
                        <li><a className='a' href='https://www.devmedia.com.br/certificado/tecnologia/programacao/nailson-rocha' target='blank'>Programação</a></li>
                    </ul>
                </div>

                
            </div>

        </div>
    )
}