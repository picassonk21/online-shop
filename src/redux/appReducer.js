const TOGGLE_INITIALIZED = 'TOGGLE_INITIALIZED';

let initialState = {
    initialized: false,
}

const appReducer = (state = initialState, action) => {
    switch(action.type) {
        case TOGGLE_INITIALIZED:
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }
}

export const toggleInitialized = () => {
    return { type: TOGGLE_INITIALIZED }
}

export default appReducer