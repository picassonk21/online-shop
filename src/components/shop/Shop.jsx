import BagContainer from "./bag/BagContainer"
import Footer from "./footer/Footer"
import s from "./shop.module.css"
import HeaderContainer from "./header/HeaderContainer"
import MenuContainer from "./menu/MenuContainer.jsx"
import ProductsContainer from "./products/ProductsContainer"
import OrderMenuContainer from './orderMenu/OrderMenuContainer'

const Shop = (props) => {
    return (
        <div className={s.shopContainer + ' ' + (props.confirmOrderMode? s.disabled : '')}>
            <div className={s.shop}>
                <HeaderContainer />
                <MenuContainer />
                <BagContainer />
                <ProductsContainer />
                {/* <Footer /> */}
            </div>
            <div className={s.orderMenu + (props.confirmOrderMode ? '' : ' ' + s.hidden)} onClick={(e) => {
              if(e.target.className === s.orderMenu) {
                props.toggleConfirmOrderMode(false);
              }
            }}>
                <OrderMenuContainer />
            </div>
        </div>
    )
}

export default Shop;