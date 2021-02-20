import s from './header.module.css'
import bagImage from '../../../common/bag.svg'
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return (
        <div className={s.headerInner}>
            <img src={bagImage} />
            {props.category ? <div className={s.headerText}><NavLink to={"/"} onClick={props.deleteActiveCategory} className={s.allCategories}>All</NavLink> / <span className={s.category}>{props.category}</span></div> : ""}
        </div>
    )
}

export default Header;