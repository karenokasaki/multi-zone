import s from "./styles.module.scss";
import * as c from "./data.json";
import ResponsiveImage from "../../ui/ResponsiveImage";

export default function Thinq() {
  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <div className={s.image}>
          <ResponsiveImage {...c.assets} />
          <img src={c.logo} alt={c.logo_alt} className={s.logo} />
        </div>

        <div className={s.content}>
          <h3>{c.header}</h3>
          <p>{c.copy1}</p>
          <p>{c.copy2}</p>
        </div>
      </div>
    </div>
  );
}
