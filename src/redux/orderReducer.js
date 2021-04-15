import { shopAPI } from "../api/api";

const TOGGLE_CONFIRM_ORDER_MODE = "TOGGLE_CONFIRM_ORDER_MODE";
const TOGGLE_ORDER_SUCCESS = "TOGGLE_ORDER_SUCCESS";
const TOGGLE_ORDER_IN_PROGRESS = "TOGGLE_ORDER_IN_PROGRESS";

let initialState = {
  confirmOrderMode: false,
  orderSuccess: false,
  orderInProgress: false
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
    case TOGGLE_ORDER_IN_PROGRESS:
      return {
        ...state,
        orderInProgress: action.inProgress
      };
    default:
      return state;
  };
};

export default orderReducer;

export const toggleConfirmOrderMode = (confirmOrderMode) => {
  return { type: TOGGLE_CONFIRM_ORDER_MODE, confirmOrderMode };
};

export const toggleOrderSuccess = (success) => {
  return { type: TOGGLE_ORDER_SUCCESS, success };
};

export const toggleOrderInProgress = (inProgress) => {
  return { type: TOGGLE_ORDER_IN_PROGRESS, inProgress };
};

export const sendOrder = (data) => dispatch => {
  dispatch(toggleOrderInProgress(true))
  shopAPI.sendOrder(data)
  .then(
    response => {
      if(response.resultCode === 20) {
        dispatch(toggleOrderInProgress(false));
        dispatch(toggleOrderSuccess(true));
      }
    }
  );
};