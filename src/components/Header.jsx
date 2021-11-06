import { Component, React } from "react";
import Logo from "../image/logo/logo.png";
import ShortIcon from "../image/logo/short-icon.png";
import Sobre from './Sobre.jsx';

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
                    <div className="img-header">
                        <img src={Logo} alt="logo" class="img-logo-header" />
                    </div>
                    <div className="header-item">
                        <div className="hvr-underline-from-left">
                            <p>    ALVARÁ DE FUNCIONAMENTO</p>
                        </div>
                        <div className="hvr-underline-from-left">
                            <p>ALVARÁ SANITÁRIO</p>
                        </div>
                        <div className="hvr-underline-from-left">
                            <p>IPTU</p>
                        </div>
                        <div className="hvr-underline-from-left">
                            <p>HABITE-SE</p>
                        </div>
                        <div className="hvr-underline-from-left">
                            <p>LICENÇAS</p>
                        </div>
                        <div className="hvr-underline-from-left">
                            <p>AVCB</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}
