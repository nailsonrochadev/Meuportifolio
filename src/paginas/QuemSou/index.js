import React from 'react';
import './style.css';

import { TopoSecundario } from '../../componentes/TopoSecundário';
import Rodape from '../../componentes/rodape';

export default function QuemSou (){

    let data = new Date()
    let ano = data.getFullYear()
    let anoNascimento = 1993

    let resultado = ano - anoNascimento

    return(
        <section className='quemsou'>

            <TopoSecundario/>

            <div className='caixa-qs'>
                <div className='h1'>
                    <p className='p1'>Sejam bem-vindos ao quem sou!</p>
                </div>
            </div>

            <div  className='box-brincar'>
                <p className='p-brincar'>Vamos brincar?</p>
            </div>

            <section className='container4'>

                <div className='boxe'>
                    <h3 className='title'>Sabe minha <span>idade</span>?</h3>

                    <p className='text'>Passe o mouse no quadrado</p>

                    <p className='circle'>{resultado}</p>

                </div>

                <div className='boxe'>
                    <h3 className='title'>Se tenho <span>filhos</span>?</h3>

                    <p className='text'>Passe o mouse no quadrado</p>

                    <p className='circle'>Casal</p>

                </div>

                <div className='boxe'>
                    <h3 className='title'>Minha <span>cidade</span>?</h3>

                    <p className='text'>Passe o mouse no quadrado</p>

                    <p className='circle'>Salvador</p>
                </div>

                
            </section>

            <div  className='resumo'>
                <p className='p-resumo'>Um breve resumo</p>
            </div>

            <section className='texto-sou'>
                <div className='meu-texto'>

                    <p className='p-1'>
                        Sou apaixonado pelo Esporte Clube Bahia, assuntos políticos e leituras aleatórias. Além disso,
                        sou muito ligado à zona rural. Amo a vida no campo e o silêncio e encantos que a natureza nos proporciona.  
                    </p>
                    <p className='p-2'>
                        Busco sempre desenvolver minhas tarefas com profissionalismo, mesmo não estando satisfeito. Também, sempre
                        espero um feedback positivo nas tarefas realizadas. É sempre bom. Não sou muito fã de festas, prefiro
                        estar em paz em casa com a família. São meus melhores parceiros.
                    </p>
                    <p className='p-3'>
                        Entretando, após ter indicação de um amigo para entrar na área de TI, comecei a pesquisar e realizei uma aula
                        experimental na DevMedia. A experiência foi sensacional. Me indentifiquei bastante e decidir dar continuidade 
                        no curso.
                    </p>
                    <p className='p-4'>
                        Poeta e compositor nos momentos solitários, me entrego quando o assunto é caneta e papel. Sou um cara 
                        bem curioso e adoro novidades. Me dou bem com pessoas e tento ajudar sempre que necessário. Entretando,
                        não sou opinativo, a não ser quando sou acionado. Mas, gosto de ouvir opiniões. 
                    </p>
                    <p className='p-5'>
                        Meu contato com a tecnologia sempre foi hardware. Quebrando um rádio aqui, outro controle ali, tinha imensa 
                        curiosidade em saber como as coisas funcionavam. Software "era coisa de nerd" e eu não me considerava um. 
                    </p>
                    <p className='p-6'>
                        A priori, o Front-end foi a minha escolha para poder iniciar na área da tecnologia com o pé direito. Porém, 
                        tenho planos futuros que podem agregar ainda mais. Pretendo me tornar um FullStack e estou trabalhando muito 
                        para alcançar esse objetivo. Espero ter resumido de maneira sucinta.
                    </p>
                </div>
            </section>

            <div  className='box-brincar'>
                <p className='p-brincar'>Euzinho</p>
            </div>
            
            <section className='album'>
                <img className='minha-foto' src='../assets/foto4.jpg' alt='Foto'/>
            </section>
            <Rodape/>      
        </section>
    );
}

