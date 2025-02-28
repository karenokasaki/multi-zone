import s from "./styles.module.scss";
import * as c from "./data.json";
import { formatParagraph } from "../../lib/formatText";

export default function Component() {
  return (
    <div className={s["wrapper"]}>
      <div className={s["content"]}>
        <div className={s["copy"]}>
          <h3>{c.title}</h3>
          <p>{formatParagraph(c.copy)}</p>
        </div>
        <div className={s["asset"]}>
          <img {...c.img} />
        </div>
      </div>
    </div>
  );
}
