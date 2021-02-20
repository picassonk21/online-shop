import { NavLink } from 'react-router-dom';
import s from './menu.module.css'

const Menu = (props) => {
    
    let categories = props.categories.map ( category => <NavLink to={"/" + category} activeClassName={s.categoryItem + ' ' + s.activeCategoryItem} className={s.categoryItem}>{category}</NavLink> )
    return (
        <div className={s.menu}>
            <h3>Categories</h3>
            <div className={s.categoryList}>{categories}</div>
        </div>
    )
}

export default Menu;