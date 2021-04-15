import { shopAPI } from "../api/api";

const SET_PRODUCTS = "SET_PRODUCTS";
const SET_CATEGORIES = "SET_CATEGORIES";
const SET_ACTIVE_CATEGORY = "SET_ACTIVE_CATEGORY";
const TOGGLE_PRODUCT_IS_BAGGED = "TOGGLE_PRODUCT_IS_BAGGED";
const SET_PRODUCT_AMOUNT = "SET_PRODUCT_AMOUNT";
const DELETE_ACTIVE_CATEGORY = "DELETE_ACTIVE_CATEGORY";

let initialState = {
  products: [],
  categories: [],
  activeCategory: null,
  totalSum: null
}

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        products: action.products
      };
    case SET_CATEGORIES:
      let categories = []
      for (let product of action.products) {
        if (!categories.includes(product.category)) {
          categories.push(product.category)
        }
      }
      return {
        ...state,
        categories: categories
      };
    case SET_ACTIVE_CATEGORY:
      return {
        ...state,
        activeCategory: action.category
      };
    case DELETE_ACTIVE_CATEGORY:
      return {
        ...state,
        activeCategory: null
      };
    case TOGGLE_PRODUCT_IS_BAGGED:
      return {
        ...state,
        products: [...state.products].map(product => {
          if (product.id === action.productId) {
            product.isBagged = action.isBagged;
            product.amount = action.amount;
          }
          return product;
        }),
        totalSum: [...state.products].reduce((sum, product) => {
          if (product.amount) {
            return sum + (product.price * product.amount);
          } else {
            return sum;
          }
        }, 0)
      };
    case SET_PRODUCT_AMOUNT:
      return {
        ...state,
        products: [...state.products].map(product => {
          if (product.id === action.productId) {
            product.amount = action.amount
          }
          return product
        }),
        totalSum: [...state.products].reduce((sum, product) => {
          if (product.amount) {
            return sum + (product.price * product.amount);
          } else {
            return sum;
          }
        }, 0)
      };
    default:
      return state;
  };
};
export default productsReducer;

export const setProducts = (products) => {
  return { type: SET_PRODUCTS, products };
};

export const setCategories = (products) => {
  return { type: SET_CATEGORIES, products };
};

export const setActiveCategory = (category) => {
  return { type: SET_ACTIVE_CATEGORY, category };
};

export const toggleProductIsBagged = (productId, isBagged, amount) => {
  return { type: TOGGLE_PRODUCT_IS_BAGGED, productId, isBagged, amount };
};

export const setProductAmount = (productId, amount) => {
  return { type: SET_PRODUCT_AMOUNT, productId, amount };
};

export const deleteActiveCategory = () => {
  return { type: DELETE_ACTIVE_CATEGORY };
};

export const setProductsData = () => dispatch => {
  shopAPI.getProducts()
    .then(
      response => {
        if (response.status === 200) {
          dispatch(setProducts(response.data));
          dispatch(setCategories(response.data))
        }
      }
    );
};

export const addProductToBag = (product) => {
  return dispatch => {
    if (product.isBagged) {
      let amount = product.amount + 1
      dispatch(setProductAmount(product.id, amount))
    } else {
      dispatch(toggleProductIsBagged(product.id, true, 1))
    }
  };
};

export const decreaseProductAmount = (productId, currentAmount) => {
  return dispatch => {
    if (currentAmount > 1) {
      dispatch(setProductAmount(productId, currentAmount - 1))
    } else {
      dispatch(toggleProductIsBagged(productId, false, 0))
    }
  };
};

