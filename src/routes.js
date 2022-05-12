import React from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import TelaLogin from "./components/Login/login";
import PaginaIncial from "./components/Paginainicial/pagina1";

function AppRoutes(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<TelaLogin/>}/>
                <Route path="/paginainicial" element={<PaginaIncial/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;
