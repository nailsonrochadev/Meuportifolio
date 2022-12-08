import React from "react";
import './props.css';



export function Propriedades(props){
    return( 
         <section className='topo-contato'>
             <div className='telefone'>
                <img className="img1" src={props.imagem} alt="telefone"/>
               {props.nome} 
             </div>
         </section>
    );
}