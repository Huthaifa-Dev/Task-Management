import { useReducer } from "react"

const defaultInputState = {
    value: '',
    isTouched: false
}

const inputReducer = (state, action) => {
    switch (action.type) {
        case 'INPUT':
            return (
                {
                    value: action.value,
                    isTouched: state.isTouched
                }
            );
        case 'BLUR':
            return (
                {
                    value: state.value,
                    isTouched: true
                }
            );
        case 'RESET':
            return defaultInputState;
        default:
            return defaultInputState;
    }
}

const useInput = (validate) => {
    const [inputState, dispatchInputState] = useReducer(inputReducer, defaultInputState);

    const isValid = validate(inputState.value);

    const hasError = !isValid && inputState.isTouched;

    const valueChangeHandler = (event) => {
        dispatchInputState({ type: 'INPUT', value: event.target.value });
    }

    const inputBlurHandler = () => {
        dispatchInputState({ type: 'BLUR' });
    }

    const reset = () => {
        dispatchInputState({ type: 'RESET' });
    }

    return (
        {
            value: inputState.value,
            isValid,
            hasError,
            valueChangeHandler,
            inputBlurHandler,
            reset
        }
    )

}

export default useInput;