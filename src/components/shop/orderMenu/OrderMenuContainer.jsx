import React from "react";
import { connect } from "react-redux";
import OrderMenu from "./OrderMenu";
import styles from "./orderMenu.module.css";
import { toggleConfirmOrderMode } from "../../../redux/orderReducer";
import Preloader from "../../Preloader/Preloader";
import OrderSuccess from "./orderSuccess/OrderSuccess";

class OrderMenuContainer extends React.Component {
  render() {
    return (
      <div className={styles.orderMenuContainer}>
        {(this.props.orderInProgress && <div><Preloader /></div>) 
        || (this.props.orderSuccess && <OrderSuccess />)
        || <OrderMenu toggleConfirmOrderMode={this.props.toggleConfirmOrderMode} />}
      </div>
    );
  }
};

let mapStateToProps = (state) => {
  return {
    orderInProgress: state.orderPage.orderInProgress,
    orderSuccess: state.orderPage.orderSuccess
  };
};

export default connect(mapStateToProps, { toggleConfirmOrderMode })(OrderMenuContainer);