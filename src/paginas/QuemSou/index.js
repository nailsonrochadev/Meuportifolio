import React from 'react';
import './style.css';

import { TopoSecundario } from '../../componentes/TopoSecundário';
import Rodape from '../../componentes/rodape';

export default function QuemSou (){

    const dataAtual = new Date()
    const ano = dataAtual.getFullYear()
    const anoNascimento = 1993
    const hora = dataAtual.getHours()

    const idade = ano - anoNascimento

    

    return(
        /*Pagina Geral*/
        <section className='geral'>

            <TopoSecundario/>
       
            <div  className='box-pai-apresentacao'>
                <div className='box-filho-apresentacao'>
                    <h1 className='titulo-apresentacao'>Eu sou o Nailson Rocha</h1>
                </div>
            </div>


            <section className='quemsou'>
               
                <div className='box-paragrafos-quemsou'>
                    <img className='img-quemsou' src='assets/cara.png' alt='Quem sou'/>

                    <p className='paragrafo-quemsou'>Tenho {idade} anos, casado, pai de um lindo casal, natural de Salvador.</p>
                    
                    <p className='paragrafo-quemsou'>Não há nada tão difífil como falar de nós mesmos, mas adoro desafios. Me considero curioso e sempre inovador. 
                        Estou sempre em busca de novidades, principalmente quando não me sinto satisfesito com algo. Procuro sempre 
                        manter a sanidade mental em dia, pois acredito que a mente seja o nosso "software". Na falta de manuntenção
                        torna-se absoleto.
                    </p>
                    
                    <p className='paragrafo-quemsou'>Sendo assim, o campo é meu prato predileto. É lá que encontro a família e tudo que me  faz bem.
                        Além disso, sou compositor e poeta nas horas vagas. Isso mudou completamente minha vida, pois me estimulou a ler mais, a ser mais detalhista,
                        a ouvir e nunca parar numa simples linha.
                    </p>
                    
                    <p className='paragrafo-quemsou'>Hoje, dedico a maior parte do meu tempo para essa nova "descoberta". A tecnologia. Uma grata supresa que mudou completamente minha rotina e 
                        espero que continue mudando. Meus planos futuros será me tornar FullStack. Foco e determinação não faltará. 
                    </p>
                </div>

                <div className='box-titulo-quemsou'>
                    <h2 className='titulo-quemsou'>Quem sou</h2>
                </div>

            </section>



            <div  className='formacao'>
                <div className='box-titulo-formacao'>
                    
                    <h2 className='titulo-formacao'>Formação</h2>

                </div>
                <div className='box-formacao-titulo-paragrafo'>
                
                    <img className='img-quemsou' src='assets/formacao.png' alt='Quem sou'/>

                    
                    <p className='paragrafo-formacao'>No Colégio Central da Bahia concluir meu ensino médio. </p>
                    
                    <p className='paragrafo-formacao'>Tenho cursos de capacitação profisional voltados para empreendimento. São eles: 
                    Gestão Empresarial, Gestão em Logistica, Liderança, Empreendedorismo, Técnicas de vendas, Marketing, Publicidade e Propaganda.
                    </p>
                    
                    <p className='paragrafo-formacao'>Também tenho cursos profissionalizantes de Informática e manuntenção de smartphones. Ambas 
                    as áreas com experiência de mercado.
                    </p>
                    
                    <p className='paragrafo-formacao'>Por fim, cursei por um curto período Engeharia de Software, entretanto, dei prioridade
                    a formação prática, pois tem conteúdos mais atualizados e tem uma preparação mais focada no mercado de trabalho.

                    </p>
                </div>
            </div>


            <section className='experiencias'>
              
                <div className='box-paragrafos-experiencia'>

                    <img className='img-quemsou' src='assets/saco.png' alt='Quem sou'/>

                    <p className='paragrafo-experiencia'>
                        Minha expertise é no atendimento ao cliente, pois a maior parte da minha carreira 
                        profissional foi tendo contato direto. Atualmemte sou profissional da área de beleza 
                        com foco no atendimento masculino.
                    </p>

                    <p className='paragrafo-experiencia'>
                        Além de barbeiro, tenho vasta experiência comprovada na área de hotelaria, com destaque, também, 
                        para o atendimento. Do mesmo modo, fui soldado da Polícia do Exército onde desempenhava atividades 
                        com cães de guarda. Aqui, destaco o trabalho em equipe e a disciplina.
                    </p>

                    <p className='paragrafo-experiencia'>
                        Nesse pluradidade de atividades, adquirir diferentes habilidades que hoje se tornaram ferramentas 
                        essenciais no meu dia-a-dia. E uma duas maiores liçoes aprendida foi que devemos sempre estar prontos
                        para mudanças. Isso é inevitavel. 
                    </p>

                </div>

                <div className='box-titulo-experiencia'>
                    
                    <h2 className='titulo-experiencia'>Minhas experiências</h2>

                </div>
            </section>
           
            <section className='midia'>
                <div className='box-agradecimento-midia'>
                    <h2 className='titulo-midia'>Agradecimento</h2>
                </div>
                <div className='encapsulamento'>
                    <div className='box-midia'>
                        
                            <video width='640' height='360'
                            src='midia/video.mp4'
                            controls
                            >
                            Seu navegador não suporta esse tipo de vídeo
                            </video>
                        
                    </div>
                </div>   
            </section>
            <Rodape/>      
        </section>
    );
}

