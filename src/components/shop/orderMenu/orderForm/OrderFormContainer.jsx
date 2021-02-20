import React from 'react'
import { connect } from 'react-redux'
import { shopAPI } from '../../../../api/api'
import { productsInBagSelector } from '../../../../selectors/productsSelector'
import OrderForm from './OrderForm'

class OrderFormContainer extends React.Component {
    onSubmit = (formData) => {
        let orderData = {
            ...formData,
            products: this.props.products.map(product => {
                return {
                    id: product.id,
                    count: product.amount
                }
            })
        }
        shopAPI.sendOrder(orderData)
        .then(
            response => console.log(response)
        )

    }
    render() {
        return (
            <div>
                <OrderForm onSubmit={this.onSubmit} />
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        products: productsInBagSelector(state)
    }
}

export default connect(mapStateToProps, {})(OrderFormContainer)