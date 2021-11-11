import React from 'react';
import Header from '../../components/Header';
import retornoMapDocs from './DadosHabitese';

export default function pHabitese() {
    return (
        <>
            <Header />
            <h2> Habite-se </h2>

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