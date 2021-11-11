import React from 'react';
import { BrowserRouter, Switch, Route, Routes } from 'react-router-dom';

import Main from './pages/Main';
import Avbc from './pages/Avcb';
import Habitese from './pages/Habitese';
import Iptu from './pages/Iptu';
import Licencas from './pages/Licencas';
import Funcionamento from './pages/Funcionamento';


function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/avcb" element={<Avbc />} />
                <Route path="/habite-se" element={<Habitese />} />
                <Route path="/iptu" element={<Iptu />} />
                <Route path="/licenca" element={<Licencas />} />
                <Route path="/funcionamento" element={<Funcionamento />} />
            </Routes>
        </BrowserRouter>
    );
}
export default Rotas;
