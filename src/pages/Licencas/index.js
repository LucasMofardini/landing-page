import React from 'react';
import Header from '../../components/Header';
import retornoMapDocs from './DadosLicencas';

export default function pLicencas() {
    return (
        <>
            <Header />
            <h2> Licenças </h2>

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