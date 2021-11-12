import { Component, React } from "react";
import Logo from "../image/logo/logo.png";

export default function Header() {
    return (
        <>
            <div className="bg-bf-header-container"><div className="bf-header-container">
                <div className="bf-header-item">
                    <p>Av. das Nações Unidas, 12.495</p>
                    <p>São Paulo / SP</p>
                    <p>(11) 3718-4200 / 0800 703 9003</p>
                </div>
            </div>
            </div>
            <div className="bg-header-container">
                <div className="container-header">
                    <a href="/">
                        <div className="img-header">
                            <img src={Logo} alt="logo" className="img-logo-header" />
                        </div>
                    </a>
                    <div className="header-item">
                        <a href="/funcionamento" className="hvr-underline-from-left">
                            <p>ALVARÁ DE FUNCIONAMENTO</p>
                        </a>
                        <a href="/habite-se" className="hvr-underline-from-left">
                            <p>HABITE-SE</p>
                        </a>
                        {/* <a href="/licenca" className="hvr-underline-from-left">
                            <p>LICENÇAS</p>
                        </a> */}
                        <a href="/avcb" className="hvr-underline-from-left">
                            <p>AVCB</p>
                        </a>
                        <a href="/iptu" className="hvr-underline-from-left">
                            <p>IPTU</p>
                        </a>
                    </div>
                </div>
            </div >

        </>
    );
}
