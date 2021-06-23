import { renderHook, act } from "@testing-library/react-hooks";
import { useForm } from "../../hooks/useForm";


describe('Pruebas en useForm', () => {

    const initialForm = {
        searchText: 'Capitan'
    };

    test('should return form by default', () => {
        const { result } = renderHook( () => useForm(initialForm) );
        const [ formValues, handleInputChange, reset ] = result.current;

        expect( formValues ).toEqual( initialForm );
        expect( typeof handleInputChange ).toBe( 'function' );
        expect( typeof reset ).toBe( 'function' );
    });

    test('should change the form (change searchText)', () => {
        const { result } = renderHook( () => useForm(initialForm) );
        const [ , handleInputChange ] = result.current;

        act( () => {

            handleInputChange({
                target: {
                    searchText: 'Black'
                }
            });

        });

        const [ formValues ] = result.current;
        expect( formValues ).toEqual( { ...initialForm, searchText: 'Capitan' } );
    });


    test('should reestart form with RESET', () => {
        const { result } = renderHook( () => useForm(initialForm) );
        const [ , handleInputChange, reset ] = result.current;

        act( () => {

            handleInputChange({
                target: {
                    searchText: 'Captain'
                }
            });

            reset();

        });

        const [ formValues ] = result.current;
        expect( formValues ).toEqual( initialForm );

    });
});
