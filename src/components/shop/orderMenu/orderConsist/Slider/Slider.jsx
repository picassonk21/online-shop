import s from "./slider.module.css";
import arrowLeft from "../../../../../common/arrow-left.svg";
import arrowRight from "../../../../../common/arrow-right.svg";
import { useState } from "react";

const Slider = (props) => {
  let columns = Math.ceil(props.items.length / 3);
  let [x, setX] = useState(0);
  const goRight = () => {
    setX(x + 100);
  }
  const goLeft = () => {
    setX(x - 100);
  }
  return (
    <div className={s.sliderWrapper}>
      <div className={s.slider} style={{ gridTemplateColumns: `repeat(${columns}, 100%)` }}>
        {props.items.map(item => {
          return <div className={s.slide} style={{ transform: `translateX(-${x}%)` }}>{item}</div>
        })}
      </div>
      {columns > 1 && <div className={s.sliderControls}>
        <button className={s.sliderArrow + ' ' + s.left} disabled={x === 0} onClick={() => goLeft()}><img src={arrowLeft}/></button>
        <button className={s.sliderArrow + ' ' + s.right} disabled={x === (columns - 1) * 100} onClick={() => goRight()}><img src={arrowRight}/></button>
      </div>}
    </div>

  );
};

export default Slider;