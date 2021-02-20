import OrderedItem from './orderedItem/OrderedItem'
import s from './orderList.module.css'

const OrderList = (props) => {
    let items = props.products.map(product => <OrderedItem {...product} totalSum={props.totalSum}
        decreaseProductAmount={props.decreaseProductAmount} />)
    return (
        <div className={s.OrderList}>
            {items}
            <div className={s.totalSum}>Total:<span>{props.totalSum}$</span></div>
        </div>
    )
}

export default OrderList