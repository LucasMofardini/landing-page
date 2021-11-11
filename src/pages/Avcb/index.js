import React from 'react';
import Header from '../../components/Header';
import retornoMapDocs from './DadosAvcb';

export default function pAvcb() {
    return (
        <>
            <Header />
            <h2> AVCB </h2>

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