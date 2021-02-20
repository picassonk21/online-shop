import s from './products.module.css'
import Product from './product/Product'

const Products = (props) => {
    let products = props.products.map(product => {
        return (
            <div className={s.productItem}><Product product={product} addToBag={props.addProductToBag} /></div>
        )
    })

    return (
        <div className={s.products}>
            {products}
        </div>
    )
}

export default Products;