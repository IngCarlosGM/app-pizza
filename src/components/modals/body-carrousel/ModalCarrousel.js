import React from 'react';
import PropTypes from 'prop-types';
import reactDom from 'react-dom';
import { useMemo } from 'react';

import BodyModal from './BodyModal';
import HeaderModal from './HeaderModal';
import { getStoresById } from '../../../selectors/getStoresById';

const ModalCarrousel = ({ 
                show = 'false',
                currentItem,
                stores,
                history
            }) => {

    const [storeToShow] = useMemo(() => getStoresById( currentItem, stores ), [currentItem, stores]);

    if(storeToShow === undefined || !storeToShow || storeToShow.length === 0) {
        history.replace("/");
        return null;
    }

    return reactDom.createPortal (
        <>
            <div className={`backdrop ${ (show === 'false') && 'hidden' }`}>
            </div>

            <div className={`container ${ (show === 'false') && 'hidden' }`}>

                    <div className="container__modal center-vertical-horizontal-absolute">
                        <HeaderModal 
                            currentItem= { currentItem }
                            storeToShow= { storeToShow }
                            history={ history }
                        />

                        <BodyModal 
                            currentItem= { currentItem }
                            storeToShow= { storeToShow }
                        />
                    </div>
                </div>
        </>
        ,  document.querySelector("#modal")
    )
}

ModalCarrousel.propTypes = {
    show: PropTypes.string.isRequired,
    currentItem: PropTypes.number.isRequired,
}

export default ModalCarrousel;