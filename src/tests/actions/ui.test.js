import { finishLoading, removeError, setError, startLoading } from "../../actions/ui";
import { types } from "../../types/types";

describe('Testing the ui.js actions', () => {

    test('should set a error', async() => {
        let error = "Error login"
        expect(setError(error)).toEqual({ type: types.uiSetError, payload: error });
    });

    test('should remove a error', async() => {
        expect(removeError()).toEqual({ type: types.uiRemoveError });
    });

    test('should start loading page', async() => {
        expect(startLoading()).toEqual({ type: types.uiStartLoading });
    });

    test('should finish loading page', async() => {
        expect(finishLoading()).toEqual({ type: types.uiFinishLoading });
    });
    
});
