import s from "./styles.module.scss";
import * as c from "./data.json";

export default function Component() {
  return (
    <div className={s["wrapper"]}>
      <div className={s["content"]}>
        <div className={s["logo"]}>
          <img {...c.logo}></img>
        </div>
        <div className={s["video"]}>
          <video
            muted
            autoPlay
            playsInline
            disablePictureInPicture
            loop
            {...c.video}
          />
        </div>
        <div className={s["header"]}>
          <span>{c.superscript}</span>
          <h1>{c.title}</h1>
          <p>{c.copy}</p>
        </div>
      </div>
    </div>
  );
}
