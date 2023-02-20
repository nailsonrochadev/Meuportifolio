import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Conteudo from '../componentes/conteudo';

export default function Rotas (){
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<Conteudo/>}/>
            </Routes>
        </BrowserRouter>
    );   
}
