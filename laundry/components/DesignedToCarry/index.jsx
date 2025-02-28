import s from "./styles.module.scss";
import * as c from "./data.json";
import ActionButton from "../../ui/ActionButton";
import { formatParagraph } from "../../lib/formatText";
import Carousel from "../../ui/Carousel";

export default function Component() {
  const settings = {
    // Carousel settings
    settings: {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [
        //unslick on desktop
        {
          breakpoint: 6000,
          settings: "unslick",
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 1,
            centerPadding: "0px",
          },
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: "30px",
            variableHeight: true,
          },
        },
      ],
    },
  };

  return (
    <div className={s["wrapper"]}>
      <div className={s["content"]}>
        <Header {...c.header} />
        <div className={s["cards"]}>
          <Carousel {...settings}>
            {c.cards.map((card) => (
              <Card {...card} />
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}

function Header(props) {
  return (
    <div className={s["header"]}>
      <h2>{props.title}</h2>
      <p>{props.copy}</p>
    </div>
  );
}

function Card(props) {
  return (
    <div className={s["card"]}>
      <div className={s["card-img"]}>
        <img {...props.img} />
      </div>
      <div className={s["card-copy"]}>
        <h3>{props.title}</h3>
        <p>{formatParagraph(props.copy)}</p>
      </div>
      <div className={s["card-cta"]}>
        {props.cta.map((btn) => (
          <ActionButton {...btn} className={s.cta} />
        ))}
      </div>
    </div>
  );
}
