import React from 'react';
import Header from '../../components/Header';
import retornoMapDocs from './DadosFuncionamento';

export default function pFuncinamento() {


    return (
        <>
            <Header />
            <h2> ALVARÁ DE FUNCIONAMENTO </h2>

            <div className="bg-container-docs">
                <div className="container-docs">
                    <div className="docs">
                        {retornoMapDocs}
                    </div>
                </div>
            </div>
        </>
    );
}