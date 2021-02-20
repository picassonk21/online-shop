import s from './header.module.css'
import bagImage from '../../../common/bag.svg'

const Header = (props) => {
    return (
        <div className={s.headerInner}>
            <img src={bagImage} />
            {props.category ? <div className={s.headerText}><span>All</span> / <span className={s.category}>{props.category}</span></div> : ""}
        </div>
    )
}

export default Header;