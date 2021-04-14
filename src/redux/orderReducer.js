const TOGGLE_CONFIRM_ORDER_MODE = "TOGGLE_CONFIRM_ORDER_MODE";
const TOGGLE_ORDER_SUCCESS = "TOGGLE_ORDER_SUCCESS";

let initialState = {
  confirmOrderMode: false,
  orderSuccess: false
}

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_CONFIRM_ORDER_MODE:
      return {
        ...state,
        confirmOrderMode: action.confirmOrderMode
      };
    case TOGGLE_ORDER_SUCCESS:
      return {
        ...state,
        orderSuccess: action.success
      };
    default:
      return state;
  }
}

export const toggleConfirmOrderMode = (confirmOrderMode) => {
  return { type: TOGGLE_CONFIRM_ORDER_MODE, confirmOrderMode }
}

export const toggleOrderSuccess = (success) => {
  return { type: TOGGLE_ORDER_SUCCESS, success }
}

export default orderReducer;



