import styles from '../bag.module.css'
import defaultImg from '../../../../common/defaultProductImage.svg';

const BaggedProduct = (props) => {
    let productImg = props.imgUrl ? props.imgUrl : defaultImg;
    return (
        <div className={styles.productItemInner}>
            <div className={styles.productImage}><img src={productImg} alt={"photo"}/></div>
            <div className={styles.productItemName}>{props.name}</div>
            <div className={styles.productInfo}>
                <div className={styles.productAmount}>{props.amount}</div>
                <div className={styles.removeItemBtn} onClick={ () => props.decreaseProductAmount(props.id, props.amount) }>remove</div>
                <div className={styles.productItemPrice}>{props.price}$</div>
            </div>
           
        </div>
    )
}

export default BaggedProduct;