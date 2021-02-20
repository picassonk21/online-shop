import bag from '../../../common/bagImage.svg'
import s from './bag.module.css'
import BaggedProduct from './baggedProduct/BaggedProduct'

const Bag = (props) => {
    return (
        <div>
            <div className={s.bagTitle}>My bag</div>
            {!props.products.length > 0 && 
            <div className={s.bagInner}>
                <div className={s.emptyBag}>
                    <img src={bag} />
                    <div className={s.emptyBagText}>the bag is empty</div>
                </div>
            </div>}
            {props.products.length > 0 && props.products.map(product => <BaggedProduct {...product} decreaseProductAmount={props.decreaseProductAmount} />)}
            <div className={s.bagFooter}>
                <div className={s.priceSum}>{props.sum}</div>
                <button className={s.checkoutBtn} disabled={props.isEmpty} onClick={ () => props.toggleConfirmOrderMode(true) }>proceed to checkout</button>
            </div>
            
        </div>
    )
}

export default Bag;