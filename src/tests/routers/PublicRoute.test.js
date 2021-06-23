import React from 'react';
import { mount } from 'enzyme';
import { PublicRoute } from '../../routers/PublicRoute';
import { MemoryRouter } from 'react-router-dom';

describe('Testing in PublicRoute component', () => {
    
    const props = {
        location: {
            pathname: '/'
        }
    }

    test('should ignore the render because is authenticate', () => {
        
        const wrapper = mount(
            <MemoryRouter>
                <PublicRoute 
                    loggedIn={ true }
                    component={ () => <span>Listo!</span> }
                    { ...props }
                />
            </MemoryRouter>
        );

        expect( wrapper.find('span').exists() ).toBe( false );
    })


    test('should render the component', () => {
        
        const wrapper = mount(
            <MemoryRouter>
                <PublicRoute 
                    loggedIn={ false }
                    component={ () => <span>Listo!</span> }
                    { ...props }
                />
            </MemoryRouter>
        );

        expect( wrapper.find('span').exists() ).toBe( true );
    });
});
