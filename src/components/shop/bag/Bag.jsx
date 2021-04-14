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
            <div className={s.bagList}>
              {props.products.length > 0 && props.products.map(product => <BaggedProduct {...product} decreaseProductAmount={props.decreaseProductAmount} />)}
            </div>
            <div className={s.bagFooter}>
                {props.sum > 0 && <div className={s.priceSum}>to pay: {Math.floor(props.sum * 100) / 100}$</div>}
                <button className={s.checkoutBtn} disabled={props.isEmpty} onClick={ () => props.toggleConfirmOrderMode(true) }>proceed to checkout</button>
            </div>
            
        </div>
    )
}

export default Bag;