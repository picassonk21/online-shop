import rubbish from "../../../../../common/rubbish.svg";
import s from "./orderedItem.module.css";
import { useState } from "react";

const OrderedItem = (props) => {
  let [editMode, setEditMode] = useState(false);
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
        <div className={s.itemAmount} onDoubleClick={() => setEditMode(true)}>
          {(!editMode && <span>{props.amount}</span>) || 
          <input autoFocus onInput={(e) => props.setProductAmount(props.id, e.target.value)}
          onBlur={(e) => {
            setEditMode(false);
            if(e.target.value < 1) {
              props.toggleProductIsBagged(props.id, false, 0);
            }
            }} value={props.amount} />}X
        </div>
        <div className={s.removeBtn} onClick={() => props.decreaseProductAmount(props.id, props.amount)}>
          <img src={rubbish} />
        </div>
        <div className={s.itemSumToPay}>
          {Math.floor(props.amount * props.price * 100) / 100}$
                </div>
      </div>


    </div>
  )
}

export default OrderedItem