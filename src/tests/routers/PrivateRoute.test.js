import React from 'react';
import { mount } from 'enzyme';
import { PrivateRoute } from '../../routers/PrivateRoute';
import { MemoryRouter } from 'react-router-dom';

describe('Testing in PrivateRoute component', () => {
    
    const props = {
        location: {
            path: '/'
        }
    }

    test('should show done! if is authenticate', () => {
        
        const wrapper = mount(
            <MemoryRouter>
                <PrivateRoute 
                    loggedIn={ true }
                    component={ () => <span>Listo!</span> }
                    { ...props }
                />
            </MemoryRouter>
        );

        expect( wrapper.find('span').exists() ).toBe( true );
    })


    test('should ignore render the component', () => {
        
        const wrapper = mount(
            <MemoryRouter>
                <PrivateRoute 
                    loggedIn={ false }
                    component={ () => <span>Listo!</span> }
                    { ...props }
                />
            </MemoryRouter>
        );

        expect( wrapper.find('span').exists() ).toBe(false);
    });
});
