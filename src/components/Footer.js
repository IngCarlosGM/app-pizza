import React from 'react';

export const Footer = () => {
    return (
        <footer className="space-between align-center">
            <div>
                <a 
                    href="https://facebook.com"
                    target="_blank"
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
                >
                    <img 
                        className="footer__icons img-responsive pointer"
                        src={`../assets/logo-instagram.png`} 
                        alt="Logo best pizza blanco" 
                        />
                </a>
            </div>

            <a 
                href="https://mybestpizza.net/"
                target="_blank"
            >
                <img 
                    className="footer__icons img-responsive pointer"
                    src={`../assets/logo-best-pizza-white.png`} 
                    alt="Logo best pizza blanco" 
                />
            </a>
        </footer>
    )
}