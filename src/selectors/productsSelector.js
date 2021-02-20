import { createStore } from "redux"
import { createSelector } from "reselect"

export const getProducts = (state) => {
    return state.shopPage.products
}

export const categorySelector = (state) => {
    return state.shopPage.activeCategory
}

export const productsSelector = createSelector(getProducts, categorySelector, (products, category) => {
    if(products.length > 0 && category) {
        return products.filter(product => product.category === category)
    } else {
        return products
    }
    
})

export const productsInBagSelector = createSelector(getProducts, products => {
    return products.filter(product => product.isBagged)
})