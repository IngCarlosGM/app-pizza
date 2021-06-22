import React from 'react';

const BackgroundAside = () => {

    return (
        <aside className="relative">
            <img 
                className="object-fit"
                src={`../assets/imagebkg.png`} 
                alt="Fondo negro de la ilustración" 
            />

            <img 
                className="center-vertical-horizontal-absolute size-image-pizza absolute img-responsive "
                src={`../assets/Pizza.png`} 
                alt="Imagen de una Pizza"
            />

            <img 
                id="logo-best-pizza-aside"
                className="absolute logo-aside img-responsive "
                src={`../assets/Logo.png`} 
                alt="Logo de Best pizza"
            />
        </aside>
    )
}

export default BackgroundAside;
