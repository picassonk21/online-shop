import React from "react";
import { connect } from "react-redux";
import { setProductsData } from "../../redux/productsReducer";
import Shop from "./Shop";
import { toggleConfirmOrderMode } from "../../redux/orderReducer";

class ShopContainer extends React.Component {

  render() {
    return (
      <div>
        <Shop confirmOrderMode={this.props.confirmOrderMode} toggleConfirmOrderMode={this.props.toggleConfirmOrderMode} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    confirmOrderMode: state.orderPage.confirmOrderMode
  }
}

export default connect(mapStateToProps, { setProductsData, toggleConfirmOrderMode })(ShopContainer);