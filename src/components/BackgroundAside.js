import React from 'react';

const BackgroundAside = () => {

    return (
        <div className="relative">
            <img 
                className="object-fit"
                src={`../assets/imagebkg.png`} 
                alt="Fondo negro de la ilustración" 
            />

            <img 
                className="center-vertical-horizontal-absolute size-image-pizza absolute"
                src={`../assets/Pizza.png`} 
                alt="Imagen de una Pizza"
            />

            <img 
                className="absolute logo-aside"
                src={`../assets/Logo.png`} 
                alt="Logo de Best pizza"
            />
        </div>
    )
}

export default BackgroundAside;
