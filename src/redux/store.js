import middleWare from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'
const { combineReducers, createStore, applyMiddleware } = require("redux")
const { default: orderReducer } = require("./orderReducer")
const { default: productsReducer } = require("./productsReducer")
const { default: appReducer } = require("./appReducer")


let reducers = combineReducers({
    shopPage: productsReducer,
    orderPage: orderReducer,
    app: appReducer,
    form: formReducer
});
let store = createStore(reducers, applyMiddleware(middleWare));

export default store;

window.store = store;