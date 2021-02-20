import styles from '../products.module.css'
import defaultImg from '../../../../common/defaultProductImage.svg';

const Product = (props) => {
    let productImg = props.product.imgUrl ? props.product.imgUrl : defaultImg;
    return (
        <div className={styles.productItemInner} onClick={() => props.addToBag(props.product)}>
            <div className={styles.productImage}><img src={productImg} alt={"photo"}/></div>
            <div className={styles.productItemName}>{props.product.name}</div>
            <div className={styles.productItemPrice}>{props.product.price}$</div>
        </div>
    )
}

export default Product;