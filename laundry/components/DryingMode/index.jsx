import s from "./styles.module.scss";
import * as c from "./data.json";
import ActionButton from "../../ui/ActionButton";
import { cn } from "../../lib/classNames";
import { formatParagraph } from "../../lib/formatText";

export default function Component() {
  return (
    <div className={s["wrapper"]}>
      <div className={s["content"]}>
        <div className={s["header"]}>
          <h2>{c.title}</h2>
        </div>
        {c.sections.map((section, i) => (
          <div className={cn(s["section"], s[`section_${i}`])}>
            <div className={s["section-graphic"]}>
              <div className={s["section-asset"]}>
                {section.assetType === "image" ? (
                  <img {...section.asset} />
                ) : null}
                {section.assetType === "video" ? (
                  <video
                    muted
                    autoPlay
                    playsInline
                    disablePictureInPicture
                    loop
                    {...section.asset}
                  />
                ) : null}
              </div>
              <Disclaimer disclaimer={section.disclaimer} />
            </div>
            <div className={s["section-copy"]}>
              <h3>{section.title}</h3>
              <p>{formatParagraph(section.copy)}</p>
              {section.cta ? (
                <div className={s["section-cta"]}>
                  <ActionButton {...section.cta} />
                </div>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Disclaimer({ disclaimer }) {
  if (!disclaimer) return null;
  return (
    <div className={s["section-disclaimer"]}>
      <span>{disclaimer}</span>
    </div>
  );
}
