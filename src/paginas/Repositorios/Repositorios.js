import React from "react"
import './Style.css'

import { TopoSecundario } from "../../componentes/TopoSecundário"
import Rodape from "../../componentes/rodape"

export default function Repositorios (){
    return (
        <div className="repositorios">
            <TopoSecundario/>

                <section className="secao-repositorio-1">
                    <h1 className="titulo-repositorios">Bem-vindos à página dos repositórios</h1>
                    <p className="paragrafo-repositorio">Aqui está disponível todos os meus repositórios. Cada link te levará para uma nova experiência.</p>
                </section>
                <section className="secao-repositorio-2">
                    <div className="box-repositorios">
                        <a className="link-repositorio" href="https://github.com/NailsonRocha/Meuportifolio"            target="blank">Portifólio</a>
                        <a className="link-repositorio" href="https://github.com/NailsonRocha/clinica"                  target="blank">Clínica</a>
                        <a className="link-repositorio" href="https://github.com/NailsonRocha/Agencia-de-viagens"       target="blank">Agência de Viagens</a>
                        <a className="link-repositorio" href="https://github.com/NailsonRocha/Livro"                    target="blank">Livraria</a>
                        <a className="link-repositorio" href="https://github.com/NailsonRocha/calculadora-de-conversao" target="blank">Calculadora de conversão</a>
                        <a className="link-repositorio" href="https://github.com/NailsonRocha/signos"                   target="blank">Baralho de Signo</a>
                        <a className="link-repositorio" href="https://github.com/NailsonRocha/Otica"                    target="blank">Ótica</a>
                        <a className="link-repositorio" href="https://github.com/NailsonRocha/Sorveteria"               target="blank">Sorveteria</a>
                        <a className="link-repositorio" href="https://github.com/NailsonRocha/Projeto-advocacia"        target="blank">Escritório</a>
                        <a className="link-repositorio" href="https://github.com/NailsonRocha/Pousada"                  target="blank">Pousada</a>
                    </div>
                    <div className="imagem-repositorio">
                        <img className="avatar" src="assets/avar.png" alt="Avatar"/>                    
                    </div>
                </section>
            <Rodape/>
        </div>
    )
}