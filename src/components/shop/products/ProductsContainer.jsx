import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux';
import { categorySelector, productsSelector } from '../../../selectors/productsSelector'
import { addProductToBag } from '../../../redux/productsReducer'
import Products from './Products'
import { withRouter } from 'react-router-dom'

class ProductsContainer extends React.Component {
    
    render() {
        return (
            <div>
                <Products {...this.props}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        products: productsSelector(state),
        category: categorySelector(state)
    }
}

export default compose(
    connect(mapStateToProps, {addProductToBag}),
    withRouter
)(ProductsContainer)