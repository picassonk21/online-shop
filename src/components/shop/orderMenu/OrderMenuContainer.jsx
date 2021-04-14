import React from 'react'
import { connect } from 'react-redux'
import OrderMenu from './OrderMenu'
import styles from './orderMenu.module.css'
import { toggleConfirmOrderMode } from '../../../redux/orderReducer'

class OrderMenuContainer extends React.Component {
  render() {
    return (
      <div className={styles.orderMenuContainer}>
        <OrderMenu {...this.props} />
      </div>
    );
  }
};

export default connect(null, { toggleConfirmOrderMode })(OrderMenuContainer);