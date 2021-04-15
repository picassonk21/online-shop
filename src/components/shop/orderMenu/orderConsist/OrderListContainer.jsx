import React from "react";
import { connect } from "react-redux";
import OrderList from "./OrderList";
import { productsInBagSelector } from "../../../../selectors/productsSelector";
import { decreaseProductAmount, setProductAmount, toggleProductIsBagged } from "../../../../redux/productsReducer";
import { toggleConfirmOrderMode } from "../../../../redux/orderReducer";

class OrderListContainer extends React.Component {

  componentDidUpdate() {
    if(!this.props.products.length) {
      this.props.toggleConfirmOrderMode(false);
    }
  }
    render() {
        return(
            <div>
                <OrderList {...this.props}/>
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        products: productsInBagSelector(state),
        totalSum: state.shopPage.totalSum,

    }
}

export default connect(mapStateToProps, { decreaseProductAmount, setProductAmount, toggleProductIsBagged, toggleConfirmOrderMode })(OrderListContainer)