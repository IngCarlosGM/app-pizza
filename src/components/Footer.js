import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
    return (
        <footer className="space-between align-center">
            <div>
                <a 
                    href="https://facebook.com"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img 
                        className="footer__icons img-responsive pointer"
                        src={`../assets/logo-facebook.png`} 
                        alt="Logo best pizza blanco" 
                    />
                </a>

                <a 
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img 
                        className="footer__icons img-responsive pointer"
                        src={`../assets/logo-instagram.png`} 
                        alt="Logo best pizza blanco" 
                        />
                </a>
            </div>

            <Link to="/">
                <img 
                    className="footer__icons img-responsive pointer"
                    src={`../assets/logo-best-pizza-white.png`} 
                    alt="Logo best pizza blanco" 
                />
            </Link>
        </footer>
    )
}