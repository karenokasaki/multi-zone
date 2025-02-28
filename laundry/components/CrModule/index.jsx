import s from "./styles.module.scss";
import * as c from "./data.json";
import ActionButton from "../../ui/ActionButton";

export default function CrModule() {
  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <div className={s.image_container}>
          <div className={s.main_image}>
            <img src={c.image.src} alt={c.image.alt} />
          </div>
          <div className={s.cr_logo}>
            <img src={c.logo_src} alt={c.image.alt} />
          </div>
          <div className={s.cr_models}>
            <p>{c.cr_models}</p>
          </div>
        </div>
        <div className={s.content}>
          <h2 className={s.title}>{c.title}</h2>
          <div className={s.texts}>
            {c.texts.map((text, i) => (
              <p key={i + "text"}>{text}</p>
            ))}
          </div>
          <div className={s.cta}>
            <ActionButton
              label={c.cta.label}
              href={c.cta.href}
              target="_blank"
            />
          </div>
          <div className={s.disclaimer_desktop}>
            <p>{c.disclaimer}</p>
          </div>
        </div>
      </div>
      <div className={s.disclaimer}>
        <p>{c.disclaimer}</p>
      </div>
    </div>
  );
}
