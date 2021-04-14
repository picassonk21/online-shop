import { shopAPI } from "../api/api";
import { setCategories, setProducts } from "./productsReducer";

const TOGGLE_INITIALIZED = 'TOGGLE_INITIALIZED';

let initialState = {
    initialized: false,
}

const appReducer = (state = initialState, action) => {
    switch(action.type) {
        case TOGGLE_INITIALIZED:
            return {
                ...state,
                initialized: action.initialized
            }
        default:
            return state
    }
}

export const toggleInitialized = (initialized) => {
    return { type: TOGGLE_INITIALIZED, initialized }
}

export const initializeApp = () => dispatch => {
  shopAPI.getProducts()
  .then(
    response => {
        if(response.status === 200) {
            dispatch(setProducts(response.data));
            dispatch(setCategories(response.data));
            dispatch(toggleInitialized(true));
        }
    }
)
}

export default appReducer