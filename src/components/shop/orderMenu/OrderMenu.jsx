import s from './orderMenu.module.css'
import crossImg from '../../../common/closebtn.svg'
import OrderListContainer from './orderConsist/OrderListContainer'
import OrderFormContainer from './orderForm/OrderFormContainer'

const OrderMenu = (props) => {
    return (
        <div className={s.orderMenu}>
            <div className={s.closeBtn} onClick={ () => props.toggleConfirmOrderMode(false) }>
                <img src={crossImg} alt=""/>
            </div>
            <OrderListContainer />
            <OrderFormContainer />
        </div>
    )
}

export default OrderMenu;