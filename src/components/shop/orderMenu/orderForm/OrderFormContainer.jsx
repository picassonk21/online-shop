import React from "react";
import { connect } from "react-redux";
import { shopAPI } from "../../../../api/api";
import { productsInBagSelector } from "../../../../selectors/productsSelector";
import OrderForm from "./OrderForm";
import { toggleConfirmOrderMode, sendOrder } from "../../../../redux/orderReducer";
import s from "./orderForm.module.css";

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
    };
    this.props.sendOrder(orderData);
  }

  render() {
    return (
      <div className={s.orderFormInner}>
        <OrderForm onSubmit={this.onSubmit} initialValues={{ paymentType: "cash" }} toggleConfirmOrderMode={this.props.toggleConfirmOrderMode} />
      </div>
    )
  }
}

let mapStateToProps = (state) => {
  return {
    products: productsInBagSelector(state),
  }
}

export default connect(mapStateToProps, { toggleConfirmOrderMode, sendOrder })(OrderFormContainer)