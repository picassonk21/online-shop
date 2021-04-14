import preloader from "../../common/preloader.gif";
import s from "./preloader.module.css";

const Preloader = () => {
  return (
    <div className={s.preloader}>
      <img src={preloader} alt=""/>
    </div>
  );
};

export default Preloader;