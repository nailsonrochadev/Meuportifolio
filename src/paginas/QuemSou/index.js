import React from 'react';
import './style.css';

import { TopoSecundario } from '../../componentes/TopoSecundário';
import Rodape from '../../componentes/rodape';

export default function QuemSou (){

    return(
        <section className='quemsou'>

            <TopoSecundario/>

            <div  className='box-quemsou-1'>
                <div className='box-quem-1'>
                    <h1 className='titulo-quemsou-1'>Quem sou</h1>
                    
                    <p className='paragrafo-quemsou-1'>Meu nome é <span>Nailson Rocha</span>, tenho 29 anos, casado, pai de um lindo casal, natural de Salvador.</p>
                    
                    <p className='paragrafo-quemsou-1'>Não há nada tão difífil como falar de nós mesmos, mas adoro desafios. Me considero curioso e sempre inovador. 
                        Estou sempre em busca de novidades, principalmente quando não me sinto satisfesito com algo. Procuro sempre 
                        manter a sanidade mental em dia, pois acredito que a mente seja o nosso "software". Na falta de manuntenção
                        torna-se absoleto.
                    </p>
                    
                    <p className='paragrafo-quemsou-1'>Sendo assim, o campo é meu prato predileto. É lá que encontro a família e tudo que me  faz bem.
                        Além disso, sou compositor e poeta nas horas vagas. Isso mudou completamente minha vida, pois me estimulou a ler mais, a ser mais detalhista,
                        a ouvir e nunca parar numa simples linha.
                    </p>
                    
                    <p className='paragrafo-quemsou-1'>Hoje, dedico a maior parte do meu tempo para essa nova "descoberta". A tecnologia. Uma grata supresa que mudou completamente minha rotina e 
                        espero que continue mudando. Meus planos futuros será me tornar FullStack. Foco e determinação não faltará. 
                    </p>
                </div>
                <div className='box-imagem-quemsou-1'>
                    <img className='img' src='assets/foto4.jpg' alt='Foto'></img>
                </div>
            </div>


            
                
  

            <section className='box-quemsou-2'>
                <div className='box2'>
                    <h2 className='titulo-quemsou-2'>Minhas experiências</h2>
                    <p className='paragrafo-quemsou-3'>
                        Minha expertise é no atendimento ao cliente, pois a maior parte da minha carreira 
                        profissional foi tendo contato direto. Atualmemte sou profissional da área de beleza 
                        com foco no atendimento masculino.
                    </p>

                    <p className='paragrafo-quemsou-3'>
                        Além de barbeiro, tenho vasta experiência comprovada na área de hotelaria, com destaque, também, 
                        para o atendimento. Do mesmo modo, fui soldado da Polícia do Exército onde desempenhava atividades 
                        com cães de guarda. Aqui, destaco o trabalho em equipe e a disciplina.
                    </p>

                    <p className='paragrafo-quemsou-3'>
                        Nesse pluradidade de atividades, adquirir diferentes habilidades que hoje se tornaram ferramentas 
                        essenciais no meu dia-a-dia. E uma duas maiores liçoes aprendida foi que devemos sempre estar prontos
                        para mudanças. Isso é inevitavel. 
                    </p>

                </div>
            </section>

            <div  className='box-quemsou-3'>
                <div className='box-quem-3'>
                <h1 className='titulo-quemsou-3'>Formação</h1>
                
                <p className='paragrafo-quemsou-3'>No Colégio Central da Bahia concluir meu ensino médio. </p>
                
                <p className='paragrafo-quemsou-3'>Tenho cursos de capacitação profisional voltados para empreendimento. São eles: 
                Gestão Empresarial, Gestão em Logistica, Liderança, Empreendedorismo, Técnicas de vendas, Marketing, Publicidade e Propaganda.
                </p>
                
                <p className='paragrafo-quemsou-3'>Também tenho cursos profissionalizantes de Informática e manuntenção de smartphones. Ambas 
                as áreas com experiência de mercado.
                </p>
                
                <p className='paragrafo-quemsou-3'>Por fim, cursei por um curto período Engeharia de Software, entretanto, dei prioridade
                a formação prática, pois tem conteúdos mais atualizados e tem uma preparação mais focada no mercado de trabalho.

                </p>
                </div>
            </div>
           
            <section className='album'>
                <img className='minha-foto' src='../assets/foto4.jpg' alt='Foto'/>
            </section>
            <Rodape/>      
        </section>
    );
}

