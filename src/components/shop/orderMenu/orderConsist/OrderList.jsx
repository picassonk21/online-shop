import OrderedItem from './orderedItem/OrderedItem';
import s from './orderList.module.css';
import Slider from './Slider/Slider';

const OrderList = (props) => {
  let items = props.products.map(product => <OrderedItem {...product} totalSum={props.totalSum}
    decreaseProductAmount={props.decreaseProductAmount} setProductAmount={props.setProductAmount}
    toggleProductIsBagged={props.toggleProductIsBagged} />)
  return (
    <div className={s.OrderList}>
      <Slider items={items} />
      <div className={s.totalSum}>Total:<span>{Math.floor(props.totalSum * 100) / 100}$</span></div>
    </div>
  )
}

export default OrderList