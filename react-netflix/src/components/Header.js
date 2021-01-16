import React from 'react';
import './Header.css';
import Logo from '../assets/logo.svg'

export default ({ black }) => {
    return (
        <header className={black ? 'header black' : 'header'}>
                <div className="logo"><img src={Logo} alt="Netflix" /> </div>
                <div className="dev">Desenvolvido por Rafael Moura</div>
        </header>
    );
}