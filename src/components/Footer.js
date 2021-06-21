import React from 'react';

export const Footer = () => {
    return (
        <footer className="space-between align-center">
            <div>
                <img 
                    className="footer__icons img-responsive pointer"
                    src={`../assets/logo-facebook.png`} 
                    alt="Logo best pizza blanco" 
                />

                <img 
                    className="footer__icons img-responsive pointer"
                    src={`../assets/logo-instagram.png`} 
                    alt="Logo best pizza blanco" 
                />
            </div>
            <img 
                className="footer__icons img-responsive pointer"
                src={`../assets/logo-best-pizza-white.png`} 
                alt="Logo best pizza blanco" 
            />
        </footer>
    )
}