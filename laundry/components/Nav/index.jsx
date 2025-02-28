import s from "./styles.module.scss";
import * as c from "./data.json";
import { useState } from "react";
import { cn } from "../../lib/classNames";

export default function Component() {
  const ROW_HEIGHT = 50;
  const HEADER_HEIGHT = 60;
  const BOTTOM_MARGIN = 16;

  const [open, setOpen] = useState(false);
  const openedHeight = (Array.isArray(c.nav) ? c.nav.length * ROW_HEIGHT : 0) + HEADER_HEIGHT + BOTTOM_MARGIN; /* prettier-ignore */

  return (
    <div className={s["wrapper"]}>
      <div
        className={s["content"]}
        style={{ height: open ? `${openedHeight}px` : "" }}
      >
        <div className={s["header"]}>
          <span className={s["header-logos"]}>
            <img src={c.logo} alt={c.logoAlt} />
            <img
              src={"/laundry/assets/svg/menu-icon.svg"}
              alt={""}
              className={s["header-icon"]}
              onClick={() => setOpen((s) => !s)}
            />
          </span>
        </div>

        <nav className={s["nav"]}>
          <ol className={s["nav-list"]}>
            {c.nav.map((btn) => (
              <li
                className={cn(s["nav-link"], btn.highlight && s["highlight"])}
                style={{ height: ROW_HEIGHT }}
              >
                <a href={btn.href}>
                  <span>{btn.label}</span>
                </a>
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </div>
  );
}
