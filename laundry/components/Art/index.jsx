import s from "./styles.module.scss";
import * as c from "./data.json";

export default function Art() {
  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <div className={s.header}>
          <h2>The art and science of LG Laundry</h2>
        </div>

        <div className={s.cards}>
          {c.cards.map((card) => (
            <div className={s.card} key={card.title}>
              <div className={s.video}>
                <video
                  muted
                  autoPlay
                  playsInline
                  disablePictureInPicture
                  loop
                  title={card.alt}
                  src={card.src}
                ></video>
              </div>
              <div className={s.content}>
                <h3>{card.title}</h3>
                <p>{card.copy}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
