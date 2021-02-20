import React from 'react'
import { connect } from 'react-redux'
import OrderList from './OrderList'
import { productsInBagSelector } from '../../../../selectors/productsSelector'
import { decreaseProductAmount } from '../../../../redux/productsReducer'

class OrderListContainer extends React.Component {
    render() {
        return(
            <div>
                <OrderList {...this.props}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        products: productsInBagSelector(state),
        totalSum: state.shopPage.totalSum
    }
}

export default connect(mapStateToProps, {decreaseProductAmount})(OrderListContainer)