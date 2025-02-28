import s from "./styles.module.scss";
import * as c from "./data.json";
import Carousel from "../../ui/Carousel";
import ActionButton from "../../ui/ActionButton";
import { formatParagraph } from "../../lib/formatText";
import ChatBanner from "../ChatBanner";

export default function Shop() {
  const config = {
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      { breakpoint: 650, settings: { slidesToShow: 1, slidesToScroll: 1 } },
      { breakpoint: 900, settings: { slidesToShow: 2, slidesToScroll: 2 } },
      { breakpoint: 1314, settings: { slidesToShow: 3, slidesToScroll: 2 } },
    ],
  };

  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <div className={s.header}>
          <h2>{c.title}</h2>
        </div>

        <div className={s.carousel}>
          <Carousel settings={config}>
            {c.products.map((item) => (
              <div key={item.sku} className={s.card}>
                <div className={s.image_container}>
                  <p>BEST SELLER</p>
                  <img src={item.image} alt={item.title} />
                </div>
                <div className={s.content}>
                  <p className={s.sku}>{item.sku}</p>
                  <h3>{item.name}</h3>
                  <ul className={s.desc}>
                    {item.desc.map((desc, i) => (
                      <div key={i + "desc"}>
                        <li>{formatParagraph(desc)}</li>
                      </div>
                    ))}
                  </ul>
                  <div className={s.cta}>
                    <ActionButton
                      {...item.tagging}
                      fullWidth={true}
                      className={s.cta}
                    />
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>

      <ChatBanner />

      <div className={s.logo}>
        <img src="/laundry/assets/images/lg-logo.png" />
      </div>

      <div className={s.disclaimer}>
        {c.disclaimers.map((disclaimer, i) => (
          <p key={i + "disclaimer"}>{formatParagraph(disclaimer)}</p>
        ))}
      </div>
    </div>
  );
}
