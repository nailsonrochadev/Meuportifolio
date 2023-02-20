import React from "react";
import './props.css';



export function Propriedades(props){
    return( 
         <section className='topo-contato'>
             <div className='telefone'>
               {props.nome} 
             </div>
         </section>
    );
}