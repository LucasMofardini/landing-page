import React from 'react';
import Header from '../../components/Header';
import retornoMapDocs from './DadosIptu';


export default function pFuncionamento() {
    return (
        <>
            <Header />
            <h2> IPTU </h2>
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