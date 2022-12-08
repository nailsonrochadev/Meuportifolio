import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Conteudo from '../componentes/conteudo';
import QuemSou from '../paginas/QuemSou';
import Contato from '../paginas/Contatos';

export default function Rotas (){
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<Conteudo/>}/>
                <Route path='/quemsou' element={<QuemSou/>}/>
                <Route path='/contatos' element={<Contato/>}/>
            </Routes>
        </BrowserRouter>
    );   
}
