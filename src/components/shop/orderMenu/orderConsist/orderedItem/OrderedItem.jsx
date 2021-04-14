import rubbish from '../../../../../common/rubbish.svg'
import s from './orderedItem.module.css'

const OrderedItem = (props) => {
    return (
        <div className={s.orderedItem}>
            <div className={s.productInfo}>
                <div className={s.itemLogo}>
                    <img src={props.imgUrl} />
                </div>
                <div className={s.itemInfo}>
                    <div className={s.itemTitle}>
                        {props.title}
                    </div>
                    <div className={s.itemPrice}>
                        price: {props.price}$
                    </div>
                </div>
            </div>
            <div className={s.orderInfo}>
                <div className={s.itemAmount}>
                    {props.amount}X
                </div>
                <div className={s.removeBtn} onClick={ () => props.decreaseProductAmount(props.id, props.amount) }>
                    <img src={rubbish}/>
                </div>
                <div className={s.itemSumToPay}>
                    {props.amount * props.price}$
                </div>
            </div>


        </div>
    )
}

export default OrderedItem