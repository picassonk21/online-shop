const TOGGLE_CONFIRM_ORDER_MODE = 'TOGGLE_CONFIRM_ORDER_MODE'

let initialState = {
    confirmOrderMode: false
}

const orderReducer = (state = initialState, action) => {
    switch(action.type) {
        case TOGGLE_CONFIRM_ORDER_MODE:
            return {
                ...state,
                confirmOrderMode: action.confirmOrderMode
            }
        default:
            return state
    }
}

export const toggleConfirmOrderMode = (confirmOrderMode) => {
    return {type: TOGGLE_CONFIRM_ORDER_MODE, confirmOrderMode}
}

export default orderReducer;



