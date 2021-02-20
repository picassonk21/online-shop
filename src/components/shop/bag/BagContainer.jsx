import React from 'react'
import { connect } from 'react-redux'
import Bag from './Bag'
import s from './bag.module.css'
import { decreaseProductAmount } from '../../../redux/productsReducer'
import { toggleConfirmOrderMode } from '../../../redux/orderReducer'
import { productsInBagSelector } from '../../../selectors/productsSelector'

class BagContainer extends React.Component {

    state = {
        isEmpty: this.props.products.length === 0
    }

    componentDidMount() {
        this.setState({isEmpty: this.props.products.length === 0})
    }

    componentDidUpdate(prevProps) {
        if(prevProps.products.length !== this.props.products.length) {
            this.setState({isEmpty: this.props.products.length === 0})
        }
    }

    render() {
        return (
            <div className={s.bag}>
                <Bag {...this.props} isEmpty={this.state.isEmpty}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        products: productsInBagSelector(state),
        sum: state.shopPage.totalSum
    }
}

export default connect(mapStateToProps, {decreaseProductAmount, toggleConfirmOrderMode})(BagContainer)