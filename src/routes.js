import React from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Ajuda from "./components/Ajuda/ajuda";

import Anuncie from "./components/Anuncio/anunicie";
import Cadastro from "./components/Cadastro/cadastro";
import Login from "./components/Login/login";
import PagAnuncio from "./components/PaginaAnuncio/paganuncio";

import PaginaIncial from "./components/Paginainicial/pagina1";

function AppRoutes(){
    return (
        <BrowserRouter>
            <Routes>                
                <Route path="/" exact element={<Login/>}/>
                <Route path="/paginainicial"  element={<PaginaIncial/>}/>
                <Route path="/anuncie" element={<Anuncie/>}/>
                <Route path="/cadastro" element={<Cadastro/>}/>
                <Route path="/ajuda" element={<Ajuda/>}/>
                <Route path="paganuncio" element={<PagAnuncio/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;
